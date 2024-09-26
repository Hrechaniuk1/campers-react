import axios from "axios";

async function getAll(data) {
    const {equipment, location, type } = data
    const equipmentList = {
        AC: '',
        Automatic: '',
        Kitchen: '',
        TV: '',
        Bathroom: ''
    }
    Object.keys(equipmentList).forEach((item) => {
        if(equipment.includes(item)) {
            equipmentList[item] = true
        } else {
            equipmentList[item] = false
        }
    })
    const isLocation = location ? location : ''
    const form = type ? type : ''
 const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${1}&limit=${23}&location=${isLocation}&AC=${equipmentList.AC}&bathroom=${equipmentList.Bathroom}&kitchen=${equipmentList.Kitchen}&TV=${equipmentList.TV}&transmission=${equipmentList.Automatic? 'automatic' : ''}&form=${form}`)
 return response.data
}

export default getAll