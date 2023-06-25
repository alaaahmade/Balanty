import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import { startOfDay } from '@fullcalendar/core/internal';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { Box } from '@mui/system';

import axios from 'axios';

import {
  newEventInterface,
  prevInterface,
} from '../../interfaces/matchInterface';
import { IEvent } from '../../pages/CreateMatch';

import { statsContext } from '../../context';

import '../../fullcalendar-custom.css';

type Props = {
  type: string;
};

const Calendar: FC<Props> = ({ type }): ReactElement => {
  const {
    matches,
    date,
    setDate,
    Event,
    setEvent,
    setMatches,
    StadiumId,
    setValidateError,
  } = useContext(statsContext);
  const [events, setEvents] = useState([...matches]);
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
    if (type === 'profile') return;
    setDate(
      `${new Date(newEvent.startStr)
        .getHours()
        .toString()
        .padStart(2, '0')}:00:00`,
    );
    if (Event.start !== newEvent.startStr) {
      setEvent((prev: IEvent) => ({
        ...prev,
        start: newEvent.startStr,
        end: newEvent.endStr,
        id: 'pp',
      }));
    } else {
      setEvent((prev: IEvent) => ({
        ...prev,
        start: prev.start || newEvent.startStr,
        end: newEvent.endStr,
      }));
    }
  };
  const validMatches = [...events, Event];

  const getStadiumMatches = async (id: number | undefined) => {
    const { data } = await axios.get(`/api/v1/matches/stadium/${id}`);
    if (data.status === 401) {
      setValidateError(data.data);
    }
    let convertedMatches;
    if (Array.isArray(data.data)) {
      convertedMatches = data?.data?.map((event: prevInterface) => {
        return {
          title: event.title,
          start: event.startDate,
          end: event.endDate,
          description: event.description,
          seats: event.seats,
        };
      });
    }

    setMatches(convertedMatches);
  };

  const { id } = useParams();
  useEffect(() => {
    if (Event) {
      setEvents([...matches]);
      setEvents((prev: IEvent[]) => [...prev, Event]);
    }
  }, [matches]);
  useEffect(() => {
    if (StadiumId > 0 && type === 'create') {
      getStadiumMatches(StadiumId);
    } else if (type === 'profile') {
      getStadiumMatches(parseInt(id ?? '', 10));
    }
  }, [StadiumId]);

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
        scrollTime={date}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00"
        events={validMatches}
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
