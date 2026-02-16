export default function Home() {
  return (
    <main className="min-h-screen p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-400">Strato Lab</h1>
        <p className="text-slate-400 mt-1">OpenClaw Dashboard</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Active" value="12" color="blue" />
        <StatCard label="Completed" value="48" color="green" />
        <StatCard label="Pending" value="5" color="yellow" />
        <StatCard label="Failed" value="2" color="red" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actions Panel */}
        <div className="lg:col-span-1 space-y-3">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <ActionButton label="New Project" primary />
          <ActionButton label="View Logs" />
          <ActionButton label="Settings" />
          <ActionButton label="Deploy" />
        </div>

        {/* Status Panel */}
        <div className="lg:col-span-2 bg-slate-900 rounded-lg p-6 border border-slate-800">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            <StatusItem name="API Server" status="online" />
            <StatusItem name="Database" status="online" />
            <StatusItem name="Queue Worker" status="warning" />
            <StatusItem name="Storage" status="online" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-500 text-sm">
        <p>Strato Lab OpenClaw v0.1.0</p>
      </footer>
    </main>
  )
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    green: 'bg-green-500/20 border-green-500/30 text-green-400',
    yellow: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
    red: 'bg-red-500/20 border-red-500/30 text-red-400',
  }
  return (
    <div className={`p-4 rounded-lg border ${colors[color]}`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  )
}

function ActionButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <button className={`w-full p-3 rounded-lg text-left transition-colors ${
      primary 
        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
    }`}>
      {label}
    </button>
  )
}

function StatusItem({ name, status }: { name: string; status: string }) {
  const statusColors: Record<string, string> = {
    online: 'bg-green-500',
    warning: 'bg-yellow-500',
    offline: 'bg-red-500',
  }
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
      <span className="text-slate-300">{name}</span>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
        <span className="text-sm text-slate-400 capitalize">{status}</span>
      </div>
    </div>
  )
}
