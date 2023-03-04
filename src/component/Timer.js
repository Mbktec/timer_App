
import { useEffect, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Timer = (props, { tim, setTim }) => {

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);




  const [start, setStart] = useState(false)
  var timer;
  useEffect(() => {
    if (start) {
      timer = setInterval(() => {
        setSec(sec + 1);
        if (sec === 59) {
          setMin(min + 1);
          setSec(0)
        }
        if (min === 59) {
          setHr(hr + 1)
          setMin(0)
        }
      }, 1000)
    } else {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  })

  const restart = (id) => {
    setStart(!start)
  }

  return (
    <div >
      <div className='d-flex justify-content-between'>
        <h3>{hr < 10 ? "0" + hr : hr}:{min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}</h3>
        <div className='icons  '>
          <RiCloseCircleLine className='delete-icon' onClick={props.removeTodo} />
          <TiEdit className='edit-icon' onClick={props.updateTodo} />
        </div>
      </div>
      {!start ? (
        <button className='restart btn btn-success col-12' onClick={restart}>
          Start</button>
      ) :
        (
          <button className='restart btn btn-danger col-12' onClick={restart}>
            Stop</button>
        )
      }
    </div>
  );

}

export default Timer;
