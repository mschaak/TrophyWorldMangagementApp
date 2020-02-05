import React, {useState, useEffect, useRef} from 'react';
import Accordian from './Accordian'
import { useOnClickOutside } from './hooks';
const RecipeList = ({ openE, setOpenE}) => {
  const [data, setData] = useState([]);
  const [open ,setOpen] = useState(false);
  useEffect(() => {
      fetch('http://localhost:3000/employees', {
          mode: 'cors',
          method: "GET"
      })
        .then(res => res.json())
        .then(response => {
          setData(response)
        })
        .catch(error => console.log(error));
    });

  return (
    <div>
    <ul>
    {data.map(employee =>
              (
                <>
                <Accordian key = {employee._id} Id = {employee._id} Email = {employee.email} Username = {employee.username} Password = {employee.password} Phonenumber = {employee.phonenumner} Admin = {employee.admin} Master= {employee.master} openE={openE} setOpenE={setOpenE} />

                </>
              ))}

      </ul>

    </div>

  )

}
// RecipeList.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };
export default RecipeList;
