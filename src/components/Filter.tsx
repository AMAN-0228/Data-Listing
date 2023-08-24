import { filterFlags, filtercontent } from '../manualData/FilterData';
import CreateForm from './CreateForm';

export default function Filter() {
  return (
    <>
    {filtercontent.map((item,index)=>{
        return <CreateForm key={item.department} data={item} filterFlags={filterFlags.department[index]}/>
    })}
    </>
  );
}