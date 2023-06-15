import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventApi } from '@fullcalendar/core';
import { Box } from '@mui/system';
import { ReactElement } from 'react';

// this events must be coming from api request
const events = [
  {
    title: 'Event 1',
    start: '2023-06-15T09:00',
    end: '2023-06-15T10:00',
  },
  {
    title: 'Event 1',
    start: '2023-07-15T07:00',
    end: '2023-07-15T11:09',
  },
  {
    title: 'Event 1',
    start: '2023-06-16T10:00',
    end: '2023-06-16T11:08',
  },
];

const Calendar = (): ReactElement => {
  const handleEventMouseEnter = (arg: {
    event: EventApi;
    el: HTMLElement;
  }): void => {
    const modifiedArg = { ...arg };
    modifiedArg.el.style.cursor = 'pointer';
    modifiedArg.el.style.backgroundColor = 'green';
  };

  const handleEventMouseLeave = (arg: {
    event: EventApi;
    el: HTMLElement;
  }): void => {
    const modifiedArg = { ...arg };
    modifiedArg.el.style.cursor = 'pointer';
    modifiedArg.el.style.backgroundColor = '#2CB674';
  };
  return (
    <Box
      sx={{
        backgroundColor: 'lightgray',
        borderRadius: '5px',
        maxWidth: '600px',
        height: '400px',
      }}
    >
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00"
        events={events}
        height="100%"
        eventColor="#000"
        eventBackgroundColor="#2CB674"
        eventTextColor="#fff"
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
      />
    </Box>
  );
};

export default Calendar;
