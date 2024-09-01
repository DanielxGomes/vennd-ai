import { sql } from '@vercel/postgres';
import {

  InvoicesTable,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue(): Promise<Revenue[]> {
  try {
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Busca os dados de receita da tabela "revenue"
    const data = await sql<Revenue>`SELECT * FROM revenue`;
    console.log('Data fetch completed after 1 seconds.');
    if (!data || data.rows.length === 0) {
      throw new Error('No revenue data found.');
    }
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// Supondo que LatestInvoiceRaw já esteja definido como:
type LatestInvoiceRaw = {
  amount: number;
  name: string;
  image_url: string;
  email: string;
  id: string;
};

// Defina a interface LatestInvoice
type LatestInvoice = {
  amount: string;  // Aqui o campo `amount` é string
  name: string;
  image_url: string;
  email: string;
  id: string;
};

export async function fetchLatestInvoices() {
  try {
    // Busca as 5 últimas faturas e junta com os dados dos clientes
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    // Converte o campo `amount` de `number` para `string` e formata
    const latestInvoices: LatestInvoice[] = data.rows.map((invoice) => ({
      ...invoice,
      amount: invoice.amount.toString(), // Converte para string
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}


export async function fetchCardData(): Promise<{
  numberOfCustomers: number;
  numberOfInvoices: number;
  totalPaidInvoices: string;
  totalPendingInvoices: string;
}> {
  try {
    // Busca o número total de faturas, clientes e os valores pagos e pendentes das faturas
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`
      SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM invoices`;

    // Executa as queries em paralelo
    const [invoiceCountData, customerCountData, invoiceStatusData] = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    // Processa os resultados das queries
    const numberOfInvoices = Number(invoiceCountData.rows[0]?.count ?? '0');
    const numberOfCustomers = Number(customerCountData.rows[0]?.count ?? '0');
    const totalPaidInvoices = formatCurrency(invoiceStatusData.rows[0]?.paid ?? '0');
    const totalPendingInvoices = formatCurrency(invoiceStatusData.rows[0]?.pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
): Promise<InvoicesTable[]> {
  const ITEMS_PER_PAGE = 6;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // Busca faturas filtradas por um termo de pesquisa, limitando o resultado por página
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    if (!invoices || invoices.rows.length === 0) {
      throw new Error('No matching invoices found.');
    }

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

// Outras funções podem seguir a mesma estrutura para validações e tratamento de erros...
