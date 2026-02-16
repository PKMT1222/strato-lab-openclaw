'use client'

import { motion } from 'framer-motion'
import { 
  Activity, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Zap,
  Settings,
  BarChart3,
  Terminal,
  Plus,
  ChevronRight,
  TrendingUp,
  Database,
  Cloud,
  Cpu
} from 'lucide-react'

export default function Home() {
  return (
    <main className="relative min-h-screen p-6 md:p-8">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-50 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Strato Lab
              </h1>
            </motion.div>
            <motion.p 
              className="text-slate-400 text-lg ml-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Next-generation automation dashboard
            </motion.p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
          >
            <Plus className="w-5 h-5" />
            New Project
          </motion.button>
        </div>
      </motion.header>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <StatCard 
          icon={<Activity className="w-5 h-5" />}
          label="Active Jobs"
          value="12"
          change="+3 today"
          color="blue"
          delay={0}
        />
        <StatCard 
          icon={<CheckCircle2 className="w-5 h-5" />}
          label="Completed"
          value="2.4K"
          change="98% success"
          color="green"
          delay={0.1}
        />
        <StatCard 
          icon={<Clock className="w-5 h-5" />}
          label="Queue"
          value="5"
          change="~2 min wait"
          color="yellow"
          delay={0.2}
        />
        <StatCard 
          icon={<AlertCircle className="w-5 h-5" />}
          label="Failed"
          value="2"
          change="Needs attention"
          color="red"
          delay={0.3}
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Actions - Left Side */}
        <motion.div 
          className="lg:col-span-3 space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Quick Actions
          </h2>
          
          <div className="space-y-3">
            <ActionButton 
              icon={<Plus className="w-5 h-5" />}
              label="Create Workflow"
              subtitle="Start a new automation"
              primary
            />
            <ActionButton 
              icon={<Terminal className="w-5 h-5" />}
              label="View Logs"
              subtitle="System activity"
            />
            <ActionButton 
              icon={<BarChart3 className="w-5 h-5" />}
              label="Analytics"
              subtitle="Performance metrics"
            />
            <ActionButton 
              icon={<Settings className="w-5 h-5" />}
              label="Settings"
              subtitle="Configure system"
            />
          </div>

          {/* System Resources Mini */}
          <div className="glass-card rounded-2xl p-5 mt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4">System Resources</h3>
            <ResourceBar icon={<Cpu className="w-4 h-4" />} label="CPU" value={45} color="blue" />
            <ResourceBar icon={<Database className="w-4 h-4" />} label="Memory" value={62} color="purple" />
            <ResourceBar icon={<Cloud className="w-4 h-4" />} label="Storage" value={28} color="pink" />
          </div>
        </motion.div>

        {/* System Status - Center */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="glass-card rounded-2xl p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                System Status
              </h2>
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Operational
              </span>
            </div>
            
            <div className="space-y-3">
              <StatusItem 
                name="API Gateway"
                status="online"
                latency="12ms"
                uptime="99.9%"
              />
              <StatusItem 
                name="PostgreSQL Database"
                status="online"
                latency="8ms"
                uptime="99.9%"
              />
              <StatusItem 
                name="Redis Queue"
                status="online"
                latency="3ms"
                uptime="99.9%"
              />
              <StatusItem 
                name="S3 Storage"
                status="online"
                latency="45ms"
                uptime="99.9%"
              />
              <StatusItem 
                name="Worker Nodes"
                status="warning"
                latency="120ms"
                uptime="97.2%"
                message="2 of 8 at capacity"
              />
            </div>

            {/* Uptime Graph Placeholder */}
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">Response Time (24h)</span>
                <span className="text-sm text-green-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  -12% avg
                </span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {[40, 35, 45, 30, 50, 40, 35, 45, 30, 40, 35, 30, 45, 40, 35, 30, 40, 35, 45, 30].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-400/60 rounded-sm"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.02, duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity - Right Side */}
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="glass-card rounded-2xl p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                Recent Activity
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                View all
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              <ActivityItem 
                type="success"
                title="Workflow Completed"
                description="Manga processing job #1247 finished"
                time="2 min ago"
              />
              <ActivityItem 
                type="info"
                title="New Job Started"
                description="Chapter 1174 queued for processing"
                time="5 min ago"
              />
              <ActivityItem 
                type="warning"
                title="Storage Alert"
                description="S3 bucket at 75% capacity"
                time="15 min ago"
              />
              <ActivityItem 
                type="success"
                title="Backup Complete"
                description="Daily database backup finished"
                time="1 hour ago"
              />
              <ActivityItem 
                type="info"
                title="System Update"
                description="Worker nodes updated to v2.4"
                time="2 hours ago"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Row */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <MiniStat label="Total Requests" value="1.2M" trend="+8.2%" />
        <MiniStat label="Avg Latency" value="24ms" trend="-12%" />
        <MiniStat label="Active Users" value="847" trend="+23" />
        <MiniStat label="Data Processed" value="2.4 TB" trend="+456 GB" />
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-slate-500 text-sm">
          Strato Lab OpenClaw v0.1.0 • Built with Next.js & Tailwind
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-slate-600">
          <span>PostgreSQL Connected</span>
          <span>•</span>
          <span>S3 Storage Ready</span>
          <span>•</span>
          <span>All Systems Operational</span>
        </div>
      </motion.footer>
    </main>
  )
}

// Components

function StatCard({ icon, label, value, change, color, delay }: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  color: 'blue' | 'green' | 'yellow' | 'red'
  delay: number
}) {
  const colors = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/10 border-green-500/30',
    yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
    red: 'from-red-500/20 to-red-600/10 border-red-500/30',
  }

  const iconColors = {
    blue: 'text-blue-400 bg-blue-500/20',
    green: 'text-green-400 bg-green-500/20',
    yellow: 'text-yellow-400 bg-yellow-500/20',
    red: 'text-red-400 bg-red-500/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={`glass-card rounded-2xl p-5 bg-gradient-to-br ${colors[color]} border`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${iconColors[color]}`}>
          {icon}
        </div>
        <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
          {change}
        </span>
      </div>
      <div className="text-3xl font-bold text-slate-100 mb-1">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}

function ActionButton({ icon, label, subtitle, primary }: {
  icon: React.ReactNode
  label: string
  subtitle: string
  primary?: boolean
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all group ${
        primary 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' 
          : 'glass-card text-slate-200 hover:bg-slate-800/60'
      }`}
    >
      <div className={`p-2 rounded-lg ${primary ? 'bg-white/20' : 'bg-slate-700/50 group-hover:bg-slate-600/50'}`}>
        {icon}
      </div>
      <div className="text-left">
        <div className="font-medium">{label}</div>
        <div className={`text-xs ${primary ? 'text-blue-100' : 'text-slate-500'}`}>{subtitle}</div>
      </div>
      <ChevronRight className={`w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${primary ? 'text-white/70' : 'text-slate-500'}`} />
    </motion.button>
  )
}

function ResourceBar({ icon, label, value, color }: {
  icon: React.ReactNode
  label: string
  value: number
  color: 'blue' | 'purple' | 'pink'
}) {
  const colors = {
    blue: 'from-blue-500 to-blue-400',
    purple: 'from-purple-500 to-purple-400',
    pink: 'from-pink-500 to-pink-400',
  }

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2 text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-slate-300 font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colors[color]}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function StatusItem({ name, status, latency, uptime, message }: {
  name: string
  status: 'online' | 'warning' | 'offline'
  latency: string
  uptime: string
  message?: string
}) {
  const statusConfig = {
    online: { color: 'bg-green-400', text: 'text-green-400', bg: 'bg-green-400/10' },
    warning: { color: 'bg-yellow-400', text: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    offline: { color: 'bg-red-400', text: 'text-red-400', bg: 'bg-red-400/10' },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors border border-slate-700/30">
      <div className="flex items-center gap-3">
        <div className={`relative w-3 h-3 rounded-full ${config.color}`}>
          <div className={`absolute inset-0 rounded-full ${config.color} animate-ping opacity-75`} />
        </div>
        <div>
          <div className="font-medium text-slate-200">{name}</div>
          {message && <div className="text-xs text-yellow-400/80">{message}</div>}
        </div>
      </div>
      <div className="text-right">
        <div className={`text-sm font-medium ${config.text}`}>{latency}</div>
        <div className="text-xs text-slate-500">{uptime} uptime</div>
      </div>
    </div>
  )
}

function ActivityItem({ type, title, description, time }: {
  type: 'success' | 'info' | 'warning' | 'error'
  title: string
  description: string
  time: string
}) {
  const typeConfig = {
    success: { icon: CheckCircle2, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
    info: { icon: Activity, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    warning: { icon: AlertCircle, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
    error: { icon: AlertCircle, color: 'text-red-400 bg-red-400/10 border-red-400/20' },
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/30 transition-colors">
      <div className={`p-2 rounded-lg border ${config.color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-slate-200 text-sm">{title}</div>
        <div className="text-xs text-slate-400 truncate">{description}</div>
      </div>
      <div className="text-xs text-slate-500 whitespace-nowrap">{time}</div>
    </div>
  )
}

function MiniStat({ label, value, trend }: {
  label: string
  value: string
  trend: string
}) {
  const isPositive = trend.startsWith('+')
  
  return (
    <div className="glass-card rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-slate-100 mb-1">{value}</div>
      <div className="text-xs text-slate-400 mb-2">{label}</div>
      <div className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-blue-400'}`}>
        {trend}
      </div>
    </div>
  )
}
