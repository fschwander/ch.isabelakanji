import React from "react";

export default function Logo() {

  let style = {},
    fill = "#222",
    background = '#fff',
    width = "100%",
    className = "",
    viewBox = "0 0 256 256";

  return (
    <svg className={`Logo icon ${className || ""}`}
         width={width}
         style={style}
         height={width}
         viewBox={viewBox}
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">

      <g id="icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval" fill={background} cx="128" cy="128" r="128"></circle>
        <g id="iA_black" transform="translate(64.000000, 64.000000)" fill={fill} fillRule="nonzero">
          <path
            d="M87.6973944,72.7656342 C90.409662,71.6796291 92.8602196,70.7352768 95.2869854,69.7437069 C97.1903312,68.9646162 99.0698851,68.1146991 100.973231,67.3119997 C102.210406,66.7926059 103.495164,66.3204298 104.732339,65.801036 C107.468398,64.6205956 110.180666,63.4165464 112.916725,62.2124973 C113.344978,62.0236268 113.820814,61.9055828 114.225275,61.6694947 C116.533082,60.2057486 118.959848,58.930873 121.457989,57.7976502 C122.956874,57.1129948 124.527134,56.5699923 126.263937,55.861728 C126.263937,56.5699923 126.263937,56.9005156 126.263937,57.3018653 C126.715982,57.2546477 127.144235,57.2074301 127.834197,57.1129948 C127.358361,58.0809559 127.025275,58.8364378 126.597023,59.7099637 C126.787357,59.7335725 127.168026,59.7807901 127.929365,59.8988341 C127.191818,60.3237927 126.715982,60.7015336 126.192562,60.890404 C125.12193,61.2445361 125.050554,61.3625802 125.740517,62.0708444 C124.884011,63.5581993 124.07509,64.9983365 123.218584,66.4620826 C123.028249,66.7926059 122.718956,67.0995204 122.481037,67.4064349 C121.981409,68.0674815 121.481781,68.7521369 120.982153,69.4131836 C120.791818,69.6728804 120.625275,69.9325773 120.387357,70.1450566 C119.055015,71.4199322 117.67509,72.671199 116.366539,74.016901 C116.176205,74.2057715 116.342748,74.7251653 116.342748,75.4334295 C114.724904,76.4013906 112.84535,77.5110045 111.013379,78.6678361 C109.752413,79.4705356 108.53903,80.3676703 107.301855,81.2175873 C106.564309,81.7133723 105.826762,82.2563749 105.089216,82.728551 C103.971,83.4368152 102.876577,84.1922971 101.686985,84.7825173 C98.546465,86.3406986 95.3583609,87.8280534 92.2178405,89.3390171 C90.9806657,89.9292373 89.743491,90.5666751 88.5301081,91.2277217 C88.3159817,91.3457658 88.0780635,91.6998979 88.0780635,91.935986 C88.149439,94.1552139 88.1732308,96.3744418 88.3873572,98.5936697 C88.6014836,100.836506 89.0059445,103.055734 89.3152382,105.298571 C89.4341973,106.148488 89.9576174,106.573447 90.7903312,106.880361 C93.9070598,108.037193 97.1665393,108.202454 100.402227,108.674631 C101.020814,108.769066 101.639402,108.934327 102.257989,108.957936 C102.567283,108.957936 102.900368,108.721848 103.209662,108.580195 C103.304829,108.532978 103.399997,108.414934 103.495164,108.438542 C104.565796,108.556586 105.684011,108.556586 106.730852,108.863501 C107.49219,109.07598 108.205945,109.595374 108.753156,110.161985 C109.038658,110.445291 108.872116,111.129946 108.943491,111.86182 C109.538287,112.333996 109.562078,113.278348 108.919699,114.081047 C108.53903,114.553224 108.348695,115.190661 108.063194,115.757273 C108.158361,115.828099 108.253528,115.898926 108.348695,115.969752 C108.086985,116.040578 107.801484,116.276667 107.587357,116.182231 C106.611893,115.80449 106.088472,116.512755 105.327134,116.819669 C104.042376,117.339063 102.543491,117.291845 101.187357,117.693195 C99.8312234,118.094545 98.5940486,117.575151 97.3092903,117.551542 C94.6683981,117.480716 92.2416323,117.079366 89.8862419,115.757273 C87.8877289,114.62405 85.5561304,114.104656 83.7241602,112.593693 C83.1055728,112.097908 82.5345691,111.507687 82.0825245,110.87025 C80.6312234,108.839892 78.942004,106.927579 78.1806657,104.472263 C77.7999966,103.291822 77.5144947,102.087773 77.1814092,100.883724 C76.8721156,99.7032836 76.5628219,98.5228433 76.2535282,97.2479677 C68.7353126,98.5228433 63.5486955,95.5953511 60.7650524,88.4654913 C60.550926,88.6071441 60.2892159,88.7015793 60.1940486,88.866841 C58.9568739,90.944416 57.5055728,92.9275559 56.6014836,95.1467838 C55.7925616,97.1299236 54.5078033,98.5228433 53.0089185,99.9157629 C52.2237884,100.647636 51.7717438,101.75725 51.1293646,102.654385 C50.7011118,103.268214 50.1776918,103.834825 49.749439,104.448654 C49.0356843,105.463833 48.417097,106.526229 47.6795505,107.49419 C47.084755,108.29689 46.3472085,109.005154 45.7048293,109.760636 C44.4676546,111.224382 43.3018553,112.758954 41.9933051,114.151874 C41.1130077,115.096226 39.9947921,115.828099 39.0669111,116.725234 C38.0914464,117.645977 37.2587327,118.684765 36.283268,119.605508 C35.5933051,120.266555 34.7605914,120.76234 34.0706286,121.399778 C33.8327103,121.635866 33.880294,122.15526 33.6423758,122.391348 C33.1665393,122.863524 32.5955356,123.241265 32.0483237,123.642614 C30.811149,124.563358 29.5263906,125.436884 28.3130077,126.381236 C26.8854985,127.49085 25.1486955,127.420024 23.5070598,127.726938 C22.4840115,127.915809 21.3895877,127.915809 20.3427475,127.8922 C19.8907029,127.8922 19.4624501,127.608894 19.0104055,127.467241 C18.6535282,127.349197 18.272859,127.160327 17.8921899,127.183936 C15.7747178,127.254762 14.3710003,126.215975 13.1814092,124.563358 C12.7055728,123.902311 11.8252754,123.500962 11.1353126,122.957959 C10.9211862,122.792697 10.7070598,122.603827 10.5167252,122.391348 C9.30334232,120.927602 8.0661676,119.487464 6.94795198,117.976501 C6.25798916,117.032148 5.73456908,115.946143 5.21114901,114.907356 C4.78289622,114.057439 4.4260189,113.183913 4.14051704,112.310387 C3.73605607,111.035511 3.40297057,109.737027 3.04609325,108.462151 C2.83196685,107.683061 2.54646499,106.927579 2.49888135,106.148488 C2.42750589,104.51948 1.49962485,102.961299 2.23717131,101.285074 C2.26096314,101.214247 2.21337949,101.143421 2.18958767,101.048986 C1.16653934,97.7201438 1.90408581,94.4149108 2.21337949,91.0860689 C2.35613042,89.4570612 2.35613042,87.7808358 2.57025682,86.1518281 C2.73679957,84.8533437 3.14126053,83.5548593 3.42676239,82.2799837 C3.45055421,82.1619396 3.47434604,82.0438956 3.47434604,81.9258516 C3.75984789,79.2580563 4.37843525,76.6610875 5.11598172,74.0877275 C5.6394018,72.2462405 6.28178098,70.4519711 6.82899288,68.6340929 C6.92416016,68.3035696 6.68624195,67.9022199 6.73382559,67.5716966 C6.87657652,66.7217795 6.6386583,65.7774272 7.47137206,65.1163806 C7.61412299,64.9983365 7.63791481,64.691422 7.63791481,64.4789428 C7.63791481,63.6762433 7.66170663,62.8499351 7.56653934,62.0472356 C7.47137206,61.3389714 7.37620477,60.5834895 7.01932745,59.9932693 C6.13903005,58.5767409 5.99627912,58.1281735 7.09070291,57.0185596 C7.94720849,56.1686425 8.99404864,55.1770726 10.1122643,54.9409845 C11.2304799,54.7285053 12.5152382,55.3187255 13.7048293,55.6728576 C14.5375431,55.9325544 15.4654241,56.2158601 16.0602196,56.7824715 C16.7977661,57.4671269 17.2498107,58.435088 17.7970226,59.3086139 C18.6059445,60.6307071 19.4386583,61.9764092 20.1762048,63.34572 C20.5092903,63.959549 20.7234167,64.691422 20.7947921,65.3996863 C21.080294,68.0910903 21.3182122,70.7824944 21.5085468,73.4738985 C21.5561304,74.1349451 21.3182122,74.7959917 21.2706286,75.4570383 C21.2468367,75.9292144 21.3182122,76.4013906 21.3182122,76.8735667 C21.3182122,77.2513077 21.342004,77.6290486 21.2706286,77.9831807 C21.1040858,78.8567066 20.8423758,79.7066236 20.675833,80.5801495 C20.5092903,81.4064578 20.3427475,82.2327661 20.2475802,83.0826831 C20.1286211,84.0978619 20.1048293,85.1366494 20.009662,86.1754369 C19.9144947,87.1670068 19.8431193,88.1585768 19.6765765,89.1501467 C19.2959074,91.3929834 18.8200709,93.6122113 18.4394018,95.855048 C18.2966509,96.7285739 18.3680263,97.6493174 18.272859,98.5464521 C18.2252754,98.9950194 18.1063163,99.4435868 17.9635654,99.8685453 C17.749439,100.505983 17.3687698,101.119812 18.2490672,101.591988 C18.3680263,101.662815 18.3918182,101.993338 18.3918182,102.205817 C18.41561,102.984908 18.3918182,103.763999 18.3918182,105.015265 C19.5814092,104.448654 20.5568739,104.165348 21.2706286,103.575128 C22.5791787,102.465514 23.7211862,101.16703 24.9345691,99.9393717 C25.8624501,98.9950194 26.7665393,98.0270583 27.6468367,97.0590972 C28.7174687,95.855048 29.7643089,94.6746076 30.7635654,93.4233408 C31.9055728,91.9595948 33.0475802,90.4958487 34.0706286,88.9376674 C35.4029706,86.9309188 36.6163535,84.8533437 37.9011118,82.7993774 C38.1152382,82.4688541 38.4483237,82.2091573 38.7100338,81.9022428 C38.8052011,81.7841987 38.947952,81.6661547 38.9717438,81.5245018 C39.0669111,80.0843646 40.3278776,79.3052739 40.8988814,78.1484424 C42.017097,75.8347792 43.1828962,73.5683337 44.3486955,71.2782794 C44.4676546,71.0421913 44.7055728,70.8533208 44.8959074,70.6408416 C45.0148665,70.4991887 45.2765765,70.4047535 45.2765765,70.2631006 C45.5620784,67.7133494 47.1561304,65.682992 48.012636,63.3929376 C48.8929334,61.0792745 49.8446063,58.812829 50.8200709,56.5463834 C51.0341973,56.0505985 51.4386583,55.6492488 51.7955356,55.1770726 C51.1531564,54.3507643 52.2713721,53.6661089 52.1999966,52.792583 C52.4379148,52.8634095 52.6282494,52.9106271 52.6282494,52.9106271 C52.818584,52.2023629 52.8899594,51.5413162 53.1516695,50.9510961 C54.3412605,48.1180391 55.6022271,45.3085911 56.7442345,42.4519253 C57.3152382,41.0117881 57.743491,39.5244332 58.2193274,38.0370783 C59.2423758,34.8498893 60.3843832,31.6863091 61.2408888,28.4755113 C61.9784353,25.689672 63.1680263,23.1399208 64.8572457,20.8262576 C66.2609631,18.8903354 67.8550152,17.0724572 69.3301081,15.2309702 C69.4490672,14.4518796 69.4252754,13.5783537 69.7107773,12.8464807 C70.4007401,11.1230377 71.0193274,9.42320358 72.4468367,7.98306631 C73.5174687,6.89706117 74.2074315,5.1264006 74.4453498,3.59182811 C74.7070598,1.75034112 76.5866137,-0.25640752 78.6089185,0.0268981708 C79.7271341,0.168551016 80.9167252,0.0268981708 82.0587327,0.0741157859 C83.3910747,0.121333401 84.7234167,0.262986246 85.9367996,0.924032858 C86.9122643,1.46703543 88.0304799,1.77394993 89.0059445,2.3169525 C89.4579892,2.57664939 89.8386583,3.14326077 90.0289929,3.63904573 C90.552413,5.03196537 90.8379148,6.49571144 91.3375431,7.91223989 C91.5992531,8.62050412 91.1472085,9.56485642 91.0996248,10.4147735 C91.0520412,11.0758201 91.0282494,11.7368667 91.0996248,12.3743045 C91.2661676,14.1685739 91.5278776,15.9392345 91.6944204,17.7335038 C91.8371713,19.3152939 91.9085468,20.897084 91.9085468,22.4788742 C91.9085468,23.5176617 91.7895877,24.580058 91.6944204,25.6188456 C91.4565022,28.4519025 91.2899594,31.3085682 90.9568739,34.1416251 C90.7427475,35.8886768 90.0289929,37.6121198 89.9338256,39.3591715 C89.8386583,40.9881793 89.1724873,42.5935782 89.6721156,44.2698035 C89.8624501,44.8836325 89.6483237,45.6155055 89.6483237,46.2765522 C89.6245319,48.6846505 89.6245319,51.0927489 89.5531564,53.5008473 C89.4579892,56.8296891 89.2914464,60.1349222 89.1486955,63.4637641 C89.1249037,63.8178962 89.1011118,64.1720283 89.07732,64.5261604 C88.9345691,66.6981707 88.81561,68.8937898 88.5776918,71.0658001 C88.5776918,71.5143674 88.1256472,72.0101524 87.6973944,72.7656342 Z M66.8557587,77.1804812 C67.7122643,77.5582222 68.4973944,77.7707014 69.0921899,78.2192688 C70.5910747,79.3524915 72.1375431,79.3997092 73.7791787,78.6914449 C74.8498107,78.2192688 75.872859,77.7234838 77.0624501,77.1568724 C77.3717438,72.3642845 77.6810375,67.4536525 77.9665393,62.5666294 C78.2520412,57.7740414 78.4899594,52.9578447 78.7516695,48.1652568 C78.5851267,48.141648 78.418584,48.1180391 78.2520412,48.0708215 C74.944978,57.9865207 71.3762048,67.760567 66.8557587,77.1804812 Z M2.8795505,17.1668925 C2.23717131,17.709895 1.57100031,18.2528976 0.928621129,18.7959002 C0.809662021,18.6778561 0.690702913,18.5598121 0.571743805,18.4181593 C1.07137206,17.8043303 1.54720849,17.1905013 2.04683674,16.5766723 C2.59404864,15.9392345 3.14126053,15.3254055 3.71226425,14.7115765 C3.85501518,14.5463148 4.0929334,14.3810532 4.28326797,14.3574444 C5.06839808,14.3102267 5.80594455,14.3810532 6.11523823,13.3186568 C6.18661369,13.0353511 7.25724566,12.9409159 7.8520412,12.9645247 C8.94646499,13.0117423 10.017097,13.2006128 11.1115208,13.3422656 C12.01561,12.0909988 13.4431193,12.563175 14.3947921,12.8228719 C16.417097,13.3894832 18.3680263,14.404662 19.7717438,16.0572785 C20.1286211,16.482237 20.2475802,17.1196748 20.4617066,17.6626774 C20.7472085,18.4181593 21.080294,19.1500323 21.2706286,19.9055141 C21.6037141,21.274825 20.818584,22.7621798 19.3910747,23.2107472 C18.6059445,23.4468353 18.5107773,23.848185 18.3918182,24.5092316 C18.2966509,25.075843 17.9635654,25.5952367 17.749439,26.1382393 C17.6542717,26.1146305 17.5353126,26.0674129 17.4401453,26.0438041 C17.6542717,26.5159802 17.9397735,26.9881564 18.0587327,27.4839414 C18.2490672,28.381076 18.2014836,28.4046848 19.2483237,28.5463377 C18.8914464,28.8060346 18.4394018,29.0185138 18.1776918,29.3490371 C17.8921899,29.7031693 17.8683981,30.2697806 17.5828962,30.6239128 C16.940517,31.3557858 16.1553869,32.0168324 15.4654241,32.7250966 C15.3226732,32.8903583 15.2275059,33.1264464 15.1799222,33.3389256 C15.1323386,33.5041873 15.2512977,33.787493 15.1561304,33.8583194 C14.3947921,34.519366 13.609662,35.1804126 12.8007401,35.8178504 C12.3962791,36.1247649 11.9204427,36.2900266 11.4921899,36.5497234 C10.5881007,37.092726 9.70780328,37.6357286 8.80371407,38.20234 C8.63717131,38.320384 8.54200403,38.5564721 8.35166946,38.6509073 C8.04237578,38.816169 7.66170663,39.0994747 7.35241295,39.0286482 C5.47285905,38.6272985 3.66468061,38.0134695 2.47508953,36.4316794 C1.85650217,35.6053711 1.35687392,34.63741 1.09516388,33.6458401 C0.64311927,31.8987884 0.33382559,30.1281278 0.0959073739,28.3338584 C-0.0468435554,27.2950709 -0.0230517339,26.1854569 0.119699195,25.1466694 C0.476576519,22.4788742 0.999996593,19.8582965 2.90334232,17.7571126 C2.9985096,17.6390686 2.9985096,17.4501981 3.06988507,17.2849365 C3.04609325,17.2613277 2.95092596,17.2141101 2.8795505,17.1668925 Z M9.30334232,28.6171641 C9.08921592,29.1129491 8.89888135,29.4434724 8.85129771,29.7976045 C8.82750589,29.8920397 9.2795505,30.1989542 9.42230143,30.1517366 C10.0646806,29.9156485 10.8736025,29.7503869 11.3018553,29.2782107 C12.2059445,28.2158144 13.6572457,27.6964206 14.2044576,26.2562834 C14.3710003,25.807716 15.2275059,25.6188456 15.346465,25.1702782 C15.6319669,24.1314907 16.2029706,24.6036668 16.7739743,24.6981021 C17.1070598,24.7689285 17.4401453,24.8161461 17.749439,24.7925373 C17.8208144,24.7925373 17.9873572,24.3675788 17.9397735,24.3203611 C17.6780635,24.1078819 17.3925616,23.848185 17.1070598,23.8009674 C16.3695133,23.7065321 15.6319669,23.7065321 14.8468367,23.6593145 C14.2044576,24.5328404 13.5382866,25.4771927 12.8721156,26.421545 C12.7531564,26.3271098 12.6104055,26.2562834 12.4914464,26.1618481 C12.8245319,25.5480191 13.2289929,24.9577989 13.4669111,24.3203611 C13.5858702,23.9898378 13.5858702,23.2815736 13.4431193,23.234356 C12.4200709,22.8566151 11.349439,22.5733094 10.3025988,22.2900037 C9.82676239,24.580058 8.54200403,26.5159802 9.30334232,28.6171641 Z"
            id="Shape"></path>
        </g>
      </g>
    </svg>
  )
};