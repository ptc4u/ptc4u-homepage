import { useState } from 'react';
import Link from 'next/link';

/**
 * Quick Actions section component for Pinnacle Thrive Coaching.
 *
 * Horizontal sub-section below marquee with action buttons.
 */
export default function QuickActionsSection() {
  const [selectedAction, setSelectedAction] = useState(null);

  const actions = [
    {
      id: 'discovery',
      title: 'Book Discovery Session',
      description: 'Free 30-minute consultation',
      icon: '🔍',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'essentials',
      title: 'PTC Essentials Signup',
      description: '6-session coaching program',
      icon: '🚀',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'pro',
      title: 'PTC Pro Signup',
      description: '10-session coaching program',
      icon: '⭐',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'unsure',
      title: 'Unsure?',
      description: '30-min clarity conversation',
      icon: '🤔',
      color: 'from-orange-600 to-orange-700'
    }
  ];



  return (
    <section className="py-8 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={`/journey?option=${action.id}`}
              className={`bg-white border-2 border-slate-200 hover:border-purple-300 text-slate-800 hover:text-purple-700 px-6 py-4 rounded-xl font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-w-[180px] group`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{action.icon}</div>
                <div className="text-center">
                  <div className="font-semibold text-base">{action.title}</div>
                  <div className="text-sm text-slate-600 group-hover:text-slate-700">{action.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
