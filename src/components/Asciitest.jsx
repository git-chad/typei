import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Asciitest = () => {
  const element = useRef(null);
  const typed = useRef(null);

  const handleMouseMove = (e) => {
    const xPos = (e.clientY / window.innerHeight) * 26;
    const yPos = (e.clientX / window.innerWidth) * 26;

    element.current.style.transform = `rotateX(${xPos}deg) rotateY(${yPos}deg)`;
  };

  useEffect(() => {
    const options = {
      strings: [
        `

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
              `,
      ],
      typeSpeed: 0,
      backSpeed: 1,
      startDelay: 200,
      backDelay: 8000,
      loop: true,
      loopCount: Infinity,
      cursorChar: "_",
    };

    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className=" p-10 typed-wrap glow flex justify-center items-center text-center"
      style={{ whiteSpace: "pre" }}
      // ref={}
    >
      <span id="asciiElement" ref={element}></span>
    </div>
  );
};
export default Asciitest;
