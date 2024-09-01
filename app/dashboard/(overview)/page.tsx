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

        <LatestInvoices latestInvoices={latestInvoices} />
        
      </div>
    </main>
  );
}
