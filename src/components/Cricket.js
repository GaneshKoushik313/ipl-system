import React,{useState,useEffect} from 'react';
import './Cricket.css';
import Tournment from './Tournment.js';
import Events from './Events.js';
import Teams from './Teams.js';
import Stadium from './Stadium.js';

export default function Cricket(props){

    const [tournment,setTournment] = useState(true)
    const [events,setEvent] = useState(false)
    const [teams,setTeams] = useState(false)
    const [stadium,setStadium] = useState(false)

    const selectDetails = (value) => {
        if(value === 'tournment'){
            setTournment(true)
            setEvent(false)
            setTeams(false)
            setStadium(false)
        }
        else if(value === 'event'){
            setTournment(false)
            setEvent(true)
            setTeams(false)
            setStadium(false)
        }
        else if(value === 'teams'){
            setTournment(false)
            setEvent(false)
            setTeams(true)
            setStadium(false)
        }
        else if(value === 'stadium'){
            setTournment(false)
            setEvent(false)
            setTeams(false)
            setStadium(true)
        }
    }

    useEffect(() => {

    },[])

    return (
        <div>
            <div className="d-block contentCenter">
                <div className="d-flex switch-tabs mt-10">
                    <div className={tournment ? 'tab-active': ''} onClick={() => selectDetails('tournment')}>Tournment</div>
                    <div className={teams ? 'tab-active': ''} onClick={() => selectDetails('teams')}>Teams</div>
                    <div className={events ? 'tab-active': ''} onClick={() => selectDetails('event')}>Events</div>
                    <div className={stadium ? 'tab-active': ''} onClick={() => selectDetails('stadium')}>Stadium</div>
                </div>
                <div>
                    { tournment === true ?
                        <Tournment /> : events === true ? <Events /> : teams === true ? <Teams /> : <Stadium></Stadium>
                    }    
                </div>
            </div>
        </div>
    )
}