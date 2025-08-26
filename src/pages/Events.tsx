import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Edge Carolina canonical colors for legend (match your Tailwind palette)
const COLORS = {
  weekly: '#211e5e',
  labs: '#8eb8d1',
  public: '#f59e42',
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
    // Edge Labs (Wednesdays 6–8pm, starting September 10th)
  {
    title: 'Edge Labs — Talk + Build Sprint',
    start: '2025-09-10T18:00:00',
    end: '2025-09-10T20:00:00',
    color: COLORS.labs,
    location: 'Phillips Hall (room TBA)',
    description:
      'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided. First session of the semester.'
  },
  {
    title: 'Edge Labs — Talk + Build Sprint',
    start: '2025-09-17T18:00:00',
    end: '2025-09-17T20:00:00',
    color: COLORS.labs,
    location: 'Phillips Hall (room TBA)',
    description:
      'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
  },
  {
    title: 'Edge Labs — Talk + Build Sprint',
    start: '2025-09-24T18:00:00',
    end: '2025-09-24T20:00:00',
    color: COLORS.labs,
    location: 'Phillips Hall (room TBA)',
    description:
      'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
  },
  {
    title: 'Edge Labs — Talk + Build Sprint',
    start: '2025-10-01T18:00:00',
    end: '2025-10-01T20:00:00',
    color: COLORS.labs,
    location: 'Phillips Hall (room TBA)',
    description:
      'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
  },
  {
    title: 'Edge Labs — Talk + Build Sprint',
    start: '2025-10-08T18:00:00',
    end: '2025-10-08T20:00:00',
    color: COLORS.labs,
    location: 'Phillips Hall (room TBA)',
    description:
      'Lightning talk (10–15m), then focused hands-on project work. Beginners welcome—scaffolding provided.'
  },

  // One-off: Spicy 9 Fundraiser (Mar 31)
  {
    title: 'Spicy 9 Fundraiser Night',
    start: '2025-03-31T18:00:00',
    end: '2025-03-31T21:00:00',
    color: COLORS.public,
    location: 'Spicy 9 (Franklin St.)',
    description: 'Dine-in fundraiser supporting Edge Carolina programs.'
  },

  // One-off: End-of-Semester Showcase (Apr 22)
  {
    title: 'End-of-Semester Project Showcase',
    start: '2025-04-22T18:00:00',
    end: '2025-04-22T20:00:00',
    color: COLORS.public,
    location: 'Genome Sciences (auditorium TBA)',
    description:
      'Public demo night. Show what you shipped this semester. Invite friends, faculty, and recruiters.'
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
          </div>

          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
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
