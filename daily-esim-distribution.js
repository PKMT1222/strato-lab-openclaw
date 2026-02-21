#!/usr/bin/env node

const { distributionAgent } = require('./lib/esim-distribution');
const fs = require('fs').promises;

async function main() {
  console.log('🚀 Starting Daily eSIM Distribution Campaign');
  console.log('='.repeat(50));
  
  try {
    // Execute daily distribution
    const metrics = await distributionAgent.executeDailyDistribution();
    
    console.log('\n📊 GENERATING REPORT...');
    const report = await distributionAgent.getDailyReport();
    
    console.log('\n' + report);
    
    // Save report to file
    const reportPath = '/data/workspace/strato-lab-openclaw/data/daily-report.txt';
    await fs.writeFile(reportPath, report);
    
    console.log(`\n✅ Report saved to: ${reportPath}`);
    
    // Optional: Send notification (you can integrate with Telegram/Discord)
    console.log('\n📤 Ready to send notification if configured');
    
  } catch (error) {
    console.error('❌ Daily execution failed:', error);
    process.exit(1);
  }
}

// Run the main function
main().catch(console.error);