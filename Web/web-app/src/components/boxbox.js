import { click } from '@testing-library/user-event/dist/click';
import '../assets/styles/boxbox.css';
import { useState } from 'react'

const listeImage = ['youtube-wifi.png', 'youtube-4g.png', 'riz.png', 'jambon.png', 'Farine.png'
, 'cquoicepoulet.png', 'charlie2.png', 'bus.png', 'boeuf.png', 'avion.png', 'auto.png']

const listeTexte = ['Visionnage de 100h de vidéo en HD en wifi', 'Visionnage de 10h de vidéo en HD en 4G', 
'Production de 100 kilo de riz blanc', 'Production de 60 kilos de viande de porc label rouge', 
'Production de 100 kilo de farine de blé', 'Production de 40 kilos de viande de poulet en plein air', 'Voyager 1000km en train', 
'Voyager 1000 km en bus', 'Production de 10 kilos de viande de boeuf', 'Voler 1000 km en avion', 'Rouler 1000 km en voiture']

const listeScore = [15.6, 35.5, 280, 272, 70, 327, 8.5, 58, 345, 128, 105]

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * listeImage.length);
    let randomIndex2 = Math.floor(Math.random() * listeImage.length)
    while(randomIndex == randomIndex2){randomIndex2 = Math.floor(Math.random() * listeImage.length)}
    return [[listeImage[randomIndex], listeTexte[randomIndex], listeScore[randomIndex]], [listeImage[randomIndex2], listeTexte[randomIndex2], listeScore[randomIndex2]]];
}

const ImageBackgroundDiv = ({ paramListe  }) => {
    const [cart1, updateCart1] = useState(0)
    const [cart2, updateCart2] = useState(0)
    const [click, noUpdate] = useState(false)
    const [liste, updateList] = useState(paramListe)
    const imageUrl1 = require('../assets/images/imgco2/'+liste[0][0])
    const imageUrl2 = require('../assets/images/imgco2/'+liste[1][0])
    let txt1 = ""
    let txt2 = ""
    let rgb1 = 'rgb(255, 255, 255)'
    let rgb2 = 'rgb(255, 255, 255)'
    if(cart1==0 && cart2==0){
        txt1 = liste[0][1]
        txt2 = liste[1][1]
    }else{
        txt1 = liste[0][2]+'kg de CO2'
        txt2 = liste[1][2]+'kg de CO2'
        if(click == 0){//pas encore de résultat
            console.log('click1', click)
            if(cart1==1){
                noUpdate(click+1)
            }else{
                noUpdate(click+2)
            }
        }
        if(click==1){
            if(liste[0][2]<liste[1][2]){//il a eu bon
                rgb1 = 'rgb(0, 255, 0)'
            }else{
                rgb1 = 'rgb(255, 0, 0)'
            }
        }else if(click==2){
            if(liste[1][2]<liste[0][2]){//il a eu bon
                rgb2 = 'rgb(0, 255, 0)'
            }else{
                rgb2 = 'rgb(255, 0, 0)'
            }
        }
    }
    console.log('click2', click, cart1, cart2, liste)
    let divStyle1 = {
        backgroundImage: `url(${imageUrl1})`,
        backgroundColor:`${rgb1}`,
      };
    let divStyle2 = {
        backgroundImage: `url(${imageUrl2})`,
        backgroundColor:`${rgb2}`,
      };
    return(
        <div className="boxbase">
            <div onClick={() => {updateCart1(cart1 + 1)}} className="divImg1" style={divStyle1}>
                <h2 className='texteImage'>{txt1}</h2>
            </div>
            <img src={require("../assets/images/imgco2/eclair.png")} alt="Eclair" className="centered-image" />
            <div onClick={() => {updateCart2(cart2 + 1)}} className="divImg2" style={divStyle2}>
                <h2 className='texteImage'>{txt2}</h2>
            </div>
            <button className='butSuivant' onClick={() => {updateCart2(0);updateCart1(0);noUpdate(0);updateList(getRandomImage())}}>suivant</button>
        </div>
    )
}

const boxbox = (index) => {
    let randomImage = getRandomImage()
    if(index['index']==2){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", index['index'])
        return (
            <div>
                {/* <h1>test</h1> */}
                <ImageBackgroundDiv paramListe={randomImage}/>
            </div>
        );
    }
};

export default boxbox;