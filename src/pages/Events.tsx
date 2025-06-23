import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const eventList = [
  {
    title: 'Weekly Meeting',
    date: '2025-06-03',
    color: '#2563eb',
    location: 'Sitterson Hall, Room 014',
    description: 'Weekly member meeting for project updates and planning.'
  },
  {
    title: 'Edge Labs',
    start: '2025-06-10T17:00:00', // 5:00 PM
    end: '2025-06-10T19:00:00',   // 7:00 PM
    color: '#a21caf',
    location: 'Phillips Hall, Room 201',
    description: 'Hands-on workshop with Edge Labs team.'
  },
  {
    title: 'Public Workshop',
    start: '2025-06-15T14:00:00', // 2:00 PM
    end: '2025-06-15T16:00:00',   // 4:00 PM
    color: '#f59e42',
    location: 'Genome Sciences, Room 105',
    description: 'Open to all! Learn about our latest research.'
  },
  {
    title: 'Weekly Meeting',
    daysOfWeek: [ '3' ], // 0=Sunday, 1=Monday, ..., 6=Saturday, so 3=Wednesday
    startTime: '18:00',
    endTime: '19:00',
    color: '#2563eb',
    location: 'Sitterson Hall, Room 014',
    description: 'Weekly member meeting for project updates and planning.'
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
          {/* Legend inside the card, centered and aligned with calendar header */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: '#211e5e' }}></span>
              <span className="text-black">Weekly Meetings</span>
            </div>
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: '#8eb8d1' }}></span>
              <span className="text-black">Edge Labs</span>
            </div>
            <div className="flex items-center gap-2 bg-terqoizse/10 rounded px-3 py-1 font-semibold">
              <span className="inline-block w-4 h-4 rounded" style={{ background: '#f59e42' }}></span>
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