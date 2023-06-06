import React from "react";
import { useRef } from "react";
import Typed from "typed.js";

const Asciitest = () => {
  const element = React.useRef(null);
  const typed = React.useRef(null);
  // const asciiElement = document.getElementById("asciiElement");
  const asciiElement = useRef(null);

  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const handleMouseMove = (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;

    const rotateX = mapRange(xPos, 0, window.innerWidth, -10, 10);
    const rotateY = mapRange(yPos, 0, window.innerHeight, -10, 10);

    asciiElement.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  React.useEffect(() => {
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

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //     return (
  //       <div>
  //         <pre>
  //           {`

  //             ...----....
  //            ..-:"''         ''"-..
  //          .-'                      '-.
  //        .'              .     .       '.
  //      .'   .          .    .      .    .''
  //    .'  .    .       .   .   .     .   . ..:.
  //   ..   .   .      .  .    .     .  ..  . ....:IA.
  //   .:  .   .    .    .  .  .    .. .  .. .. ....:IA.
  //   :. .   .   ..   .    .     . . .. . ... ....:.:VHA.
  //   '..  .  .. .   .       .  . .. . .. . .....:.::IHHB.
  //   .:. .  . .  . .   .  .  . . . ...:.:... .......:HIHMM.
  //   :.... .   . ."::"'.. .   .  . .:.:.:II;,. .. ..:IHIMMA
  //   ':.:..  ..::IHHHHHI::. . .  ...:.::::.,,,. . ....VIMMHM
  //   .:::I. .AHHHHHHHHHHAI::. .:...,:IIHHHHHHMMMHHL:. . VMMMM
  //   :.:V.:IVHHHHHHHMHMHHH::..:" .:HIHHHHHHHHHHHHHMHHA. .VMMM.
  //   :.V.:IVHHHHHMMHHHHHHHB... . .:VPHHMHHHMMHHHHHHHHHAI.:VMMI
  //   ::V..:VIHHHHHHMMMHHHHHH. .   .I":IIMHHMMHHHHHHHHHHHAPI:WMM
  //   ::". .:.HHHHHHHHMMHHHHHI.  . .:..I:MHMMHHHHHHHHHMHV:':H:WM
  //   :: . :.::IIHHHHHHMMHHHHV  .ABA.:.:IMHMHMMMHMHHHHV:'. .IHWW
  //   '.  ..:..:.:IHHHHHMMHV" .AVMHMA.:.'VHMMMMHHHHHV:' .  :IHWV
  //     :.  .:...:".:.:TPP"   .AVMMHMMA.:. "VMMHHHP.:... .. :IVAI
  //    .:.   '... .:"'   .   ..HMMMHMMMA::. ."VHHI:::....  .:IHW'
  //    ...  .  . ..:IIPPIH: ..HMMMI.MMMV:I:.  .:ILLH:.. ...:I:IM
  //   : .   .'"' .:.V". .. .  :HMMM:IMMMI::I. ..:HHIIPPHI::'.P:HM.
  //   :.  .  .  .. ..:.. .    :AMMM IMMMM..:...:IV":T::I::.".:IHIMA
  //   'V:.. .. . .. .  .  .   'VMMV..VMMV :....:V:.:..:....::IHHHMH
  //     "IHH:.II:.. .:. .  . . . " :HB"" . . ..PI:.::.:::..:IHHMMV"
  //       :IP""HHII:.  .  .    . . .'V:. . . ..:IH:.:.::IHIHHMMMMM"
  //       :V:. VIMA:I..  .     .  . .. . .  .:.I:I:..:IHHHHMMHHMMM
  //       :"VI:.VWMA::. .:      .   .. .:. ..:.I::.:IVHHHMMMHMMMMI
  //       :."VIIHHMMA:.  .   .   .:  .:.. . .:.II:I:AMMMMMMHMMMMMI
  //       :..VIHIHMMMI...::.,:.,:!"I:!"I!"I!"V:AI:VAMMMMMMHMMMMMM'
  //       ':.:HIHIMHHA:"!!"I.:AXXXVVXXXXXXXA:."HPHIMMMMHHMHMMMMMV
  //         V:H:I:MA:W'I :AXXXIXII:IIIISSSSSSXXA.I.VMMMHMHMMMMMM
  //           'I::IVA ASSSSXSSSSBBSBMBSSSSSSBBMMMBS.VVMMHIMM'"'
  //            I:: VPAIMSSSSSSSSSBSSSMMBSSSBBMMMMXXI:MMHIMMI
  //           .I::. "H:XIIXBBMMMMMMMMMMMMMMMMMBXIXXMMPHIIMM'
  //           :::I.  ':XSSXXIIIIXSSBMBSSXXXIIIXXSMMAMI:.IMM
  //           :::I:.  .VSSSSSISISISSSBII:ISSSSBMMB:MI:..:MM
  //           ::.I:.  ':"SSSSSSSISISSXIIXSSSSBMMB:AHI:..MMM.
  //           ::.I:. . ..:"BBSSSSSSSSSSSSBBBMMMB:AHHI::.HMMI
  //           :..::.  . ..::":BBBBBSSBBBMMMB:MMMMHHII::IHHMI
  //           ':.I:... ....:IHHHHHMMMMMMMMMMMMMMMHHIIIIHMMV"
  //             "V:. ..:...:.IHHHMMMMMMMMMMMMMMMMHHHMHHMHP'
  //              ':. .:::.:.::III::IHHHHMMMMMHMHMMHHHHM"
  //                "::....::.:::..:..::IIIIIHHHHMMMHHMV"
  //                  "::.::.. .. .  ...:::IIHHMMMMHMV"
  //                    "V::... . .I::IHHMMV"'
  //                      '"VHVHHHAHHHHMMV:"'
  //               `}
  //         </pre>
  //       </div>
  //     );

  return (
    <div
      className=" p-10 typed-wrap glow flex justify-center items-center text-center"
      style={{ whiteSpace: "pre" }}
      ref={asciiElement}
    >
      <span id="asciiElement" ref={element}></span>
    </div>
  );
};

export default Asciitest;
