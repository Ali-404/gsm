import  { ParametreRecuperationNotifs } from "./elements/ParametreTab";

export default function Parametres() {

    return (
        <div className="bg-normal-green rounded-[25px] py-1 px-1">
            <div className=" bg-dark-green rounded-[25px] flex gap-3 flex-col p-5 m-5 h-[75vh] overflow-auto">
               <ParametreRecuperationNotifs />
            </div>
        </div>
    )
}
