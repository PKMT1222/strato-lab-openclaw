#!/bin/bash

echo "🚀 eSIM Distribution System Setup"
echo "================================="
echo ""
echo "This will configure your SimBank distribution system."
echo ""

# Get SimBank details from user
read -p "Enter your SimBank referral URL: " simbank_url
read -p "Enter your discount code: " discount_code
read -p "Enter your name/identifier for tracking: " your_name

# Validate inputs
if [[ -z "$simbank_url" || -z "$discount_code" ]]; then
    echo "❌ SimBank URL and discount code are required!"
    exit 1
fi

# Update the distribution agent with user's details
cat > /data/workspace/strato-lab-openclaw/config/simbank-config.json << EOF
{
  "simbank_url": "$simbank_url",
  "discount_code": "$discount_code",
  "your_name": "$your_name",
  "configured_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "campaign_active": true
}
EOF

echo "✅ Configuration saved!"
echo ""
echo "📋 Your Configuration:"
echo "  SimBank URL: $simbank_url"
echo "  Discount Code: $discount_code"
echo "  Your Name: $your_name"
echo ""
echo "🎯 Next Steps:"
echo "1. Review the distribution strategy: cat ESIM_DISTRIBUTION_STRATEGY.md"
echo "2. Test the system: npm run daily-distribution"
echo "3. Set up daily automation (see below)"
echo ""
echo "⚙️  Daily Automation Setup:"
echo "Add this to your crontab for daily execution at 9 AM UTC:"
echo "0 9 * * * cd /data/workspace/strato-lab-openclaw && npm run daily-distribution"
echo ""
echo "📊 Progress Tracking:"
echo "- Daily reports: data/daily-report.txt"
echo "- Historical metrics: data/daily-metrics.json"
echo "- Check reports: npm run view-report"
echo ""
echo "🚀 System is ready! Start with: npm run daily-distribution"