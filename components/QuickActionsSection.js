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
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'essentials',
      title: 'PTC Essentials Signup',
      description: '6-session coaching program',
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'pro',
      title: 'PTC Pro Signup',
      description: '10-session coaching program',
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'unsure',
      title: 'Unsure?',
      description: '30-min clarity conversation',
      color: 'from-blue-500 to-blue-500'
    }
  ];



  return (
    <section className="fixed bottom-0 left-0 right-0 z-40 py-4 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={`/journey?option=${action.id}`}
              className={`bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-4 py-2 rounded-xl font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-w-[140px] group`}
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="text-lg group-hover:scale-110 transition-transform duration-300 button-text-white">{action.icon}</div>
                <div className="text-center">
                  <div className="font-semibold text-sm button-text-white">{action.title}</div>
                  <div className="text-xs button-text-white">{action.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
