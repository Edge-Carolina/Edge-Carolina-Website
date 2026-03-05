import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Edge Carolina canonical colors for legend (match your Tailwind palette)
const COLORS = {
  weekly: '#211e5e',
  labs: '#8eb8d1',
  public: '#f59e42',
  break: '#b69de8ff',
};

/**
 * Events reflect what we've discussed:
 * - Weekly member meeting (structure, roles, planning)
 * - Weekly Edge Labs on Tuesdays with a talk + build sprint
 * - Spicy 9 fundraiser (Mar 31)
 * - End-of-semester showcase (Apr 22)
 * - Occasional public workshops
 * Times/rooms are placeholders—adjust to confirmed rooms when you have them.
 */
const eventList: any[] = [
    // Edge Labs (Wednesdays 6–8pm, starting January 29th, Peabody 2080)
    // Note: Jan 28 is a Tuesday, so first Wednesday is Jan 29
    // Excluding March 18 (which is a Tuesday, so not in the list)
    // Last one is April 22 (Tuesday)

    //EDGE LAB MEETINGS
  {
    title: 'Edge Labs',
    start: '2026-03-04T18:00:00',
    end: '2026-03-04T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-03-11T18:00:00',
    end: '2026-03-11T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-03-25T18:00:00',
    end: '2026-03-25T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-04-01T18:00:00',
    end: '2026-04-01T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-04-08T18:00:00',
    end: '2026-04-08T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-04-15T18:00:00',
    end: '2026-04-15T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
    }
  },
  {
    title: 'Edge Labs',
    start: '2026-04-22T18:00:00',
    end: '2026-04-22T20:00:00',
    color: COLORS.labs,
    extendedProps: {
      location: 'Peabody 2080',
      description: 'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided. Last Edge Lab of the semester.'
    }
  },

    // ------------------- Year of 2026 --------------------
// SPRING BREAK WEEK (2026)
  {
    title: 'Spring Break!',
    start: '2026-03-13T23:59:00',
    end: '2026-03-22T23:59:00',
    color: COLORS.break,
    extendedProps: {
      description: 'Have an amazing break!!'
    }
  },
  
  //Spicy 9 Fundraiser!!
  {
  title: 'Spicy 9 Fundraiser!',
    start: '2026-04-20T08:00:00',
    end: '2025-04-20T23:59:00',
    color: COLORS.public,
    extendedProps: {
      location: 'Spicy 9 (Franklin St.)',
      description: 'Come and enjoy Spicy 9 while supporting Edge Carolina!'
    }
  },
  //Cosmic Night
  {
  title: 'Cosmic Night Fundraiser',
    start: '2026-03-11T18:00:00',
    end: '2025-03-11T23:00:00',
    color: COLORS.public,
    extendedProps: {
      location: 'Cosmic (Franklin St.)',
      description: 'Head over to Cosmic and let them know you are with Edge Carolina for credit!'
    }
  },

  // ------------------- Year of 2025 --------------------
  // Edge Lab Applications Deadline
  {
    title: 'Edge Lab Applications Due',
    start: '2025-01-22T23:59:00',
    end: '2025-01-22T23:59:00',
    color: COLORS.public,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeTfdbI3UA8G9uokHBsZsOMtWNQ7CwIVF2Aloi_fxMNxo6ukw/viewform',
    extendedProps: {
      location: 'Online',
      description: 'Applications for Edge Labs are due at 11:59 PM. Apply here: https://docs.google.com/forms/d/e/1FAIpQLSeTfdbI3UA8G9uokHBsZsOMtWNQ7CwIVF2Aloi_fxMNxo6ukw/viewform'
    }
  },

  // One-off: Spicy 9 Fundraiser (Mar 31, 2025)
  {
    title: 'Spicy 9 Fundraiser Night',
    start: '2025-03-31T18:00:00',
    end: '2025-03-31T21:00:00',
    color: COLORS.public,
    extendedProps: {
      location: 'Spicy 9 (Franklin St.)',
      description: 'Dine-in fundraiser supporting Edge Carolina programs.'
    }
  },

  // One-off: End-of-Semester Showcase (Apr 22, 2025)
  {
    title: 'End-of-Semester Project Showcase',
    start: '2025-04-22T18:00:00',
    end: '2025-04-22T20:00:00',
    color: COLORS.public,
    extendedProps: {
      location: 'Genome Sciences (auditorium TBA)',
      description: 'Public demo night. Show what you shipped this semester. Invite friends, faculty, and recruiters.'
    }
  },
];

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState<any>(null);

  const handleEventClick = (info: any) => {
    setModalEvent(info.event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalEvent(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-lightnavy py-8">
      <div className="w-full flex justify-center mt-16">
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 max-w-full overflow-auto relative" style={{ minWidth: 320, width: '90vw', maxWidth: 1200 }}>
          {/* Legend */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: COLORS.labs }}></span>
              <span className="text-black">Edge Labs</span>
            </div>
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: COLORS.public }}></span>
              <span className="text-black">Public Events</span>
            </div>
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: COLORS.break }}></span>
              <span className="text-black">Breaks</span>
            </div>
          </div>

          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialDate="2026-03-01"
            events={eventList}
            eventClick={handleEventClick}
          />

          <style>{`
            /* Override FullCalendar text color to black */
            .fc, .fc * {
              color: #000 !important;
            }
            /* Style FullCalendar navigation buttons */
            .fc-button {
              background: #add8e6 !important;
              color: #22335b !important;
              border-radius: 0.5rem !important;
              border: none !important;
              font-weight: 600 !important;
              transition: background 0.2s;
              box-shadow: 0 1px 2px rgba(0,0,0,0.04);
            }
            .fc-button:hover, .fc-button:focus {
              background: #8eb8d1 !important;
              color: #22335b !important;
            }
            .fc-button-primary:not(:disabled).fc-button-active, .fc-button-primary:not(:disabled):active {
              background: #8eb8d1 !important;
              color: #22335b !important;
            }
              .fc-daygrid-event {
                white-space: normal !important;
              }
              .fc-daygrid-day-events {
                white-space: normal !important;
              }
              .fc-event-title {
                white-space: normal !important;
                overflow: visible !important;
                text-overflow: unset !important;
              }
              .fc-event-main {
                text-align: center !important
                }
          `}</style>

          {/* Modal for event details */}
          {modalOpen && modalEvent && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg p-8 min-w-[300px] max-w-[90vw] relative text-black">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{modalEvent.title}</h2>
                {modalEvent.start && (
                  <p><strong>Start:</strong> {modalEvent.start.toLocaleString()}</p>
                )}
                {modalEvent.end && (
                  <p><strong>End:</strong> {modalEvent.end.toLocaleString()}</p>
                )}
                {modalEvent.extendedProps?.location && (
                  <p><strong>Location:</strong> {modalEvent.extendedProps.location}</p>
                )}
                {modalEvent.extendedProps?.description && (
                  <p className="mt-2">{modalEvent.extendedProps.description}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
