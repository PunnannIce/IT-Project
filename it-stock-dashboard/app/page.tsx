const inventorySummary = [
  { label: "Total devices", value: "248", detail: "Across all locations" },
  { label: "Available", value: "36", detail: "Ready to be assigned" },
  { label: "Assigned", value: "196", detail: "Currently in use" },
  { label: "Needs attention", value: "16", detail: "Low stock or maintenance" },
];

type DeviceStatus = "Assigned" | "Available" | "Maintenance";

type Device = {
  name: string;
  assetTag: string;
  category: string;
  assignee: string;
  userid?: string;
  status: DeviceStatus;
};

const devices: Device[] = [
  {
    name: "MacBook Pro 14-inch",
    assetTag: "IT-0142",
    category: "Laptop",
    assignee: "Nicha S.",
    userid: "user099",
    status: "Assigned",
  },
  {
    name: "Dell UltraSharp 27-inch",
    assetTag: "IT-0139",
    category: "Monitor",
    assignee: "Available",
    userid: " ",
    status: "Available",
  },
  {
    name: "ThinkPad X1 Carbon",
    assetTag: "IT-0136",
    category: "Laptop",
    userid: "user075",
    assignee: "Preecha K.",
    status: "Maintenance",
  },
  {
    name: "Logitech MX Master 3S",
    assetTag: "IT-0133",
    category: "Accessory",
    userid: " ",
    assignee: "Available",
    status: "Available",
  },
];

const statusStyles: Record<DeviceStatus, string> = {
  Assigned: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Available: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  Maintenance: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <header>
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              IT asset management
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              Inventory overview
            </h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Track equipment, availability, and items that need attention.
            </p>
          </div>
        </header>

        <section
          aria-label="Inventory summary"
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {inventorySummary.map((item) => (
            <article
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              key={item.label}
            >
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {item.label}
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section
          aria-labelledby="recent-equipment-heading"
          className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex flex-col gap-1 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold" id="recent-equipment-heading">
                Recent equipment
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                A quick look at the latest inventory records.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
                <tr>
                  <th className="px-5 py-3 font-medium" scope="col">
                    Equipment
                  </th>
                  <th className="px-5 py-3 font-medium" scope="col">
                    Category
                  </th>
                  <th className="px-5 py-3 font-medium" scope="col">
                    User ID
                  </th>
                  <th className="px-5 py-3 font-medium" scope="col">
                    Assigned to
                  </th>
                  <th className="px-5 py-3 font-medium" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {devices.map((device) => (
                  <tr
                    className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    key={device.assetTag}
                  >
                    <th className="px-5 py-4 font-medium" scope="row">
                      <span className="block">{device.name}</span>
                      <span className="mt-1 block text-xs font-normal text-zinc-500 dark:text-zinc-400">
                        {device.assetTag}
                      </span>
                    </th>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-300">
                      {device.category}
                    </td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-300">
                      {device.userid}
                    </td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-300">
                      {device.assignee}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[device.status]}`}
                      >
                        {device.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-right text-sm text-red-500 dark:text-red-400">
        <p>this table contains demo data only</p>
      </div>
    </main>
  );
}
