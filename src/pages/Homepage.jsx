import React from "react";
import logoBigRed from "../assets/logoBigRed.png";
import AsciiArt from "../components/AsciiArt";
import Asciitest from "../components/Asciitest";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="hero-container flex max-h-screen max-w-[100%] h-[calc(100vh-80px)] ">
      <div className="hero-side left flex flex-col items-center justify-center bg-[#211c1c] w-[50%] p-10">
        <img src={logoBigRed} className="m-10"></img>
        <div className="paragraph-description flex flex-col space-y-5 m-10 basic-tc">
          <p className="text-3xl py-5">
            <b>Typei </b>A simple note-taking app that organizes your thoughts effortlessly.
          </p>
          <p className="text-2xl py-5">
            Capture your ideas with full <b>Markdown support.</b>
          </p>
          <p className="text-2xl py-5 italic">Try it out for <b>free.</b></p>
          <div className="self-center py-5">
            <Link to="/Premium"><button
              className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 
            w-40 h-12  transition-colors rounded-sm text-lg"
            >
              Try it out.
            </button></Link>
          </div>
        </div>
      </div>

      <div className="hero-side right flex bg-[#211c1c] -z-20 w-[50%] min-h-screen overflow-hidden">
        <div className="ascii flex w-full h-full">
          <div
            className="flex flex-col text-xl text-[1rem]"
            style={{ whiteSpace: "pre" }}
          >
            {/* <AsciiArt/> */}
            <span className="skull-bg absolute -z-10 inset-[10px] text-right  text-[#fd5c58] blur-[8px] overflow-hidden">
            {`

...----....
..-:"''         ''"-..
.-'                      '-.
.'              .     .       '. 
.'   .          .    .      .    .''
.'  .    .       .   .   .     .   . ..:.
..   .   .      .  .    .     .  ..  . ....:IA.
.:  .   .    .    .  .  .    .. .  .. .. ....:IA.
:. .   .   ..   .    .     . . .. . ... ....:.:VHA.
'..  .  .. .   .       .  . .. . .. . .....:.::IHHB.
.:. .  . .  . .   .  .  . . . ...:.:... .......:HIHMM.
:.... .   . ."::"'.. .   .  . .:.:.:II;,. .. ..:IHIMMA
':.:..  ..::IHHHHHI::. . .  ...:.::::.,,,. . ....VIMMHM
.:::I. .AHHHHHHHHHHAI::. .:...,:IIHHHHHHMMMHHL:. . VMMMM
:.:V.:IVHHHHHHHMHMHHH::..:" .:HIHHHHHHHHHHHHHMHHA. .VMMM.
:.V.:IVHHHHHMMHHHHHHHB... . .:VPHHMHHHMMHHHHHHHHHAI.:VMMI
::V..:VIHHHHHHMMMHHHHHH. .   .I":IIMHHMMHHHHHHHHHHHAPI:WMM
::". .:.HHHHHHHHMMHHHHHI.  . .:..I:MHMMHHHHHHHHHMHV:':H:WM
:: . :.::IIHHHHHHMMHHHHV  .ABA.:.:IMHMHMMMHMHHHHV:'. .IHWW
'.  ..:..:.:IHHHHHMMHV" .AVMHMA.:.'VHMMMMHHHHHV:' .  :IHWV
:.  .:...:".:.:TPP"   .AVMMHMMA.:. "VMMHHHP.:... .. :IVAI
.:.   '... .:"'   .   ..HMMMHMMMA::. ."VHHI:::....  .:IHW'
...  .  . ..:IIPPIH: ..HMMMI.MMMV:I:.  .:ILLH:.. ...:I:IM
: .   .'"' .:.V". .. .  :HMMM:IMMMI::I. ..:HHIIPPHI::'.P:HM.
:.  .  .  .. ..:.. .    :AMMM IMMMM..:...:IV":T::I::.".:IHIMA
'V:.. .. . .. .  .  .   'VMMV..VMMV :....:V:.:..:....::IHHHMH
"IHH:.II:.. .:. .  . . . " :HB"" . . ..PI:.::.:::..:IHHMMV"
:IP""HHII:.  .  .    . . .'V:. . . ..:IH:.:.::IHIHHMMMMM"
:V:. VIMA:I..  .     .  . .. . .  .:.I:I:..:IHHHHMMHHMMM
:"VI:.VWMA::. .:      .   .. .:. ..:.I::.:IVHHHMMMHMMMMI
:."VIIHHMMA:.  .   .   .:  .:.. . .:.II:I:AMMMMMMHMMMMMI
:..VIHIHMMMI...::.,:.,:!"I:!"I!"I!"V:AI:VAMMMMMMHMMMMMM'
':.:HIHIMHHA:"!!"I.:AXXXVVXXXXXXXA:."HPHIMMMMHHMHMMMMMV
V:H:I:MA:W'I :AXXXIXII:IIIISSSSSSXXA.I.VMMMHMHMMMMMM
'I::IVA ASSSSXSSSSBBSBMBSSSSSSBBMMMBS.VVMMHIMM'"'
I:: VPAIMSSSSSSSSSBSSSMMBSSSBBMMMMXXI:MMHIMMI
.I::. "H:XIIXBBMMMMMMMMMMMMMMMMMBXIXXMMPHIIMM'
:::I.  ':XSSXXIIIIXSSBMBSSXXXIIIXXSMMAMI:.IMM
:::I:.  .VSSSSSISISISSSBII:ISSSSBMMB:MI:..:MM
::.I:.  ':"SSSSSSSISISSXIIXSSSSBMMB:AHI:..MMM.
::.I:. . ..:"BBSSSSSSSSSSSSBBBMMMB:AHHI::.HMMI
:..::.  . ..::":BBBBBSSBBBMMMB:MMMMHHII::IHHMI
':.I:... ....:IHHHHHMMMMMMMMMMMMMMMHHIIIIHMMV"
"V:. ..:...:.IHHHMMMMMMMMMMMMMMMMHHHMHHMHP'
 ':. .:::.:.::III::IHHHHMMMMMHMHMMHHHHM"
   "::....::.:::..:..::IIIIIHHHHMMMHHMV"
     "::.::.. .. .  ...:::IIHHMMMMHMV"
       "V::... . .I::IHHMMV"'
         '"VHVHHHAHHHHMMV:"'
          `}</span>
            
            <Asciitest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
