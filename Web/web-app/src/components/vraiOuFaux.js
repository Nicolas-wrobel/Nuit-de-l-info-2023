import '../assets/styles/vraiOuFaux.css';
import { useState } from 'react'

const listeQuestions = ['Le réchauffement climatique est limité', 'Le nucléaire est une énergie décarbonné', 'Les hivers très rigoureux vont disparaître', "Les actions individuelles n'ont pas d'impact face aux bouleversements écologiques"]
const listeRep = ["La dernière décennie a été considérée comme la plus chaude depuis le début des relevés de températures. Le réchauffement climatique risque de provoquer des records de chaleur à l'avenir et de provoquer une augmentation des réfugiés climatiques, face à la sécheresse et à la pénurie d'eau."
, "L'énergie nucléaire est une énergie décarbonée malgré le fait qu'elle soit une énergie fossile"
, "Les experts s'accordent pour dire que le changement climatique a un impact conséquent sur le Gulf Stream, qui devient de plus en plus étanche. Ce phénomène météorologique sépare les courants froids venus de l'Arctique et du Pôle Nord des courants plus tempérés de l'hémisphère nord. Avec le réchauffement climatique, son action devient moins efficace, et des conséquences pourraient survenir notamment en Europe, avec des épisodes de froid polaire."
, "Si chacun se mobilise, change son mode de vie, utilise des énergies propres, diminue sa consommation, boycotte les entreprises polluantes… des résultats peuvent intervenir. Le changement climatique est provoqué par l'homme, lui seul peut influer sur le destin de la planète."]
const listeValide = [1, 2, 1, 1]

const VraiOuFaux = (index) => {
    const [cart, updateCart] = useState(0)
    const [rep, updaterep] = useState(0)
    const [result, updateresult] = useState(0)
    if(index['index']==0){
    let color1 = 'rgb(0, 208, 255)'
    let color2 = 'rgb(0, 208, 255)'
    let curQ = ''
    let curR = ''
    let curV = ''
    let divStyle1 = {};
    if(cart<listeQuestions.length){
        curQ = listeQuestions[cart]
        curR = listeRep[cart]
        curV = listeValide[cart]
    }
    if(curV==result){
        if(curV==1){
            color2 = 'rgb(0, 255, 81)'
        }else{
            color1 = 'rgb(0, 255, 81)'
        }
    }else if(result !=0){
        if(curV==1){
            color1 = 'rgb(255, 0, 0)'
        }else{
            color2 = 'rgb(255, 0, 0)'
        }
    }
    let divStyleV = {backgroundColor:`${color1}`}
    let divStyleF = {backgroundColor:`${color2}`}
    if(rep==1){
        divStyle1 = {
            display: `block`,
          };
    }else{
        divStyle1 = {
            display: `none`,
          };
    }
    return (
        <div className='base'>
            <div className='question'>
                <h1>{curQ}</h1>
                <h3 style={divStyle1}>{curR}</h3>
            </div>
            <div style={divStyleV} onClick={() => {updaterep(1); updateresult(2)}} className='child child1'><h1>Vrai</h1></div>
            <div style={divStyleF} onClick={() => {updaterep(1); updateresult(1)}} className='child child2'><h1>Faux</h1></div>
            <button className='butVF' onClick={() => {if(cart==listeQuestions.length-1){updateCart(0)}else{updateCart(cart + 1)}; updaterep(0); updateresult(0)}}>suivant</button>
        </div>
    );
    }
};

export default VraiOuFaux;