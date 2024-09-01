import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
  // Busca os dados de receita para os últimos 12 meses para serem usados no componente RevenueChart.
  const revenue = await fetchRevenue();

  // Busca as últimas faturas para serem exibidas no componente LatestInvoices.
  const latestInvoices = await fetchLatestInvoices();

  // Busca múltiplos dados para exibir nos cartões, incluindo total de faturas pagas, pendentes, número de clientes e total de faturas.
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = await fetchCardData();

  // Retorna o layout principal do dashboard.
  return (
    <main>
      {/* Cabeçalho para o Dashboard */}
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* Layout em grid para os cartões do dashboard */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Cartão exibindo o valor total das faturas pagas */}
        <Card title="Collected" value={totalPaidInvoices} type="collected" />

        {/* Cartão exibindo o valor total das faturas pendentes */}
        <Card title="Pending" value={totalPendingInvoices} type="pending" />

        {/* Cartão exibindo o número total de faturas */}
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />

        {/* Cartão exibindo o número total de clientes */}
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>

      {/* Layout em grid para o gráfico de receita e as últimas faturas */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* Componente que exibe o gráfico de receita */}
        <RevenueChart revenue={revenue} />

        {/* Componente que exibe as últimas faturas */}
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}

/*
  Explicação do código:

  1. Importações:
     - `Card`: Componente utilizado para exibir informações no dashboard.
     - `RevenueChart`: Componente para exibir o gráfico de receita.
     - `LatestInvoices`: Componente para mostrar as últimas faturas.
     - `lusitana`: Fonte utilizada para estilizar o texto do dashboard.
     - `fetchRevenue`, `fetchLatestInvoices`, `fetchCardData`: Funções que buscam os dados necessários para os componentes do dashboard.

  2. Função `Page`:
     - Esta é a função principal que define a página do dashboard e busca os dados necessários para exibir as informações.

  3. Buscas de Dados:
     - `fetchRevenue`: Busca os dados de receita para os últimos 12 meses.
     - `fetchLatestInvoices`: Busca os dados das faturas mais recentes.
     - `fetchCardData`: Busca múltiplos dados para exibir nos cartões do dashboard, incluindo o total de faturas pagas, pendentes, número de clientes e total de faturas.

  4. Estrutura da Página:
     - `<main>`: Define o layout principal da página do dashboard.
     - `<h1>`: Cabeçalho da página do dashboard.
     - `div.grid`: Define uma grade para os cartões que exibem as informações principais.
     - `RevenueChart` e `LatestInvoices`: Componentes que exibem o gráfico de receita e as últimas faturas, respectivamente.
*/
