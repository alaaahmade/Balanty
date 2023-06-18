import FullCalendar from '@fullcalendar/react';
import { startOfDay } from '@fullcalendar/core/internal';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventApi } from '@fullcalendar/core';
import { Box } from '@mui/system';
import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { newEventInterface } from '../../interfaces/matchInterface';
import { IEvent } from '../../pages/CreateMatch';
import '../../fullcalendar-custom.css';

// this events must be coming from api request
const eve = [
  {
    title: 'Event 1',
    start: '2023-06-15T09:00',
    end: '2023-06-15T10:00',
    backgroundColor: '#2CB674',
  },
  {
    title: 'Event 1',
    start: '2023-07-15T07:00',
    end: '2023-07-15T08:00',
    backgroundColor: '#2CB674',
  },
  {
    title: 'Event 1',
    start: '2023-06-16T10:00',
    end: '2023-06-16T11:00',
    backgroundColor: '#2CB674',
  },
];

type Props = {
  Event: IEvent;
  setEvent: Dispatch<SetStateAction<IEvent>>;
};

const Calendar: FC<Props> = ({ Event, setEvent }): ReactElement => {
  const [events, setEvents] = useState<IEvent[]>([...eve]);
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

  const AddNewEvent = (newEvent: newEventInterface) => {
    if (Event.start !== newEvent.startStr) {
      setEvent((prev: IEvent) => ({
        ...prev,
        start: newEvent.startStr,
        end: newEvent.endStr,
      }));
    } else {
      setEvent((prev: IEvent) => ({
        ...prev,
        start: prev.start || newEvent.startStr,
        end: newEvent.endStr,
      }));
    }
  };
  useEffect(() => {
    setEvents([...eve]);
    setEvents((prev: IEvent[]) => [...prev, Event]);
  }, [Event]);

  return (
    <Box
      sx={{
        backgroundColor: '#EDF7FF',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00"
        events={events}
        height="100%"
        eventColor="#000"
        eventTextColor="#fff"
        eventBackgroundColor="#6FCDA4"
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
        selectable
        select={AddNewEvent}
        selectMirror
        selectOverlap={false}
        validRange={{
          start: startOfDay(new Date()),
        }}
      />
    </Box>
  );
};

export default Calendar;
