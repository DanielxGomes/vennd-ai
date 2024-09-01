import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  // Habilita a extensão "uuid-ossp" para gerar UUIDs automaticamente
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Cria a tabela "users" com colunas para ID, nome, email e senha
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  // Insere usuários na tabela "users" após hash da senha com bcrypt
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  // Habilita a extensão "uuid-ossp" para gerar UUIDs automaticamente
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Cria a tabela "invoices" com colunas para ID, ID do cliente, valor, status e data
  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  // Insere faturas na tabela "invoices"
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  // Habilita a extensão "uuid-ossp" para gerar UUIDs automaticamente
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Cria a tabela "customers" com colunas para ID, nome, email e URL da imagem
  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  // Insere clientes na tabela "customers"
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  // Cria a tabela "revenue" com colunas para mês e receita
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  // Insere dados de receita na tabela "revenue"
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    // Inicia uma transação
    await client.sql`BEGIN`;

    // Executa as funções de seed para popular o banco de dados
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();

    // Finaliza a transação se tudo ocorrer bem
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    // Reverte a transação em caso de erro
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
