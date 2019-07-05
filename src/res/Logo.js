import React from "react";

export default function Logo() {

  let style = {},
    fill = "#333",
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

      <g id="logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="background-circle" fill={background} cx="128" cy="128" r="128"></circle>
        <path d="M163.881199,138.683117 C167.186776,137.359548 170.173393,136.208619 173.131014,135.000143 C175.450716,134.050626 177.741422,133.01479 180.061125,132.0365 C181.568932,131.403488 183.134731,130.828024 184.642538,130.195013 C187.97711,128.756351 191.282686,127.288916 194.617259,125.821481 C195.139192,125.591295 195.719118,125.447429 196.212054,125.159697 C199.024694,123.375756 201.982315,121.822001 205.026924,120.440886 C206.85369,119.606462 208.767445,118.944678 210.884173,118.081481 C210.884173,118.944678 210.884173,119.347503 210.884173,119.836648 C211.435103,119.779102 211.957036,119.721555 212.797928,119.606462 C212.218002,120.786165 211.812054,121.706909 211.290121,122.771518 C211.522092,122.800291 211.986032,122.857838 212.913913,123.001704 C212.015028,123.519622 211.435103,123.979994 210.797185,124.21018 C209.492352,124.641778 209.405363,124.785645 210.246255,125.648842 C209.202389,127.461555 208.216515,129.216723 207.172649,131.000663 C206.940679,131.403488 206.563727,131.777541 206.273764,132.151593 C205.664843,132.957243 205.055921,133.791667 204.446999,134.597317 C204.215028,134.913823 204.012054,135.230329 203.722092,135.489288 C202.0983,137.043042 200.416515,138.568024 198.82172,140.208098 C198.58975,140.438284 198.792724,141.071295 198.792724,141.934492 C196.820976,143.114195 194.53027,144.466537 192.297556,145.876425 C190.760753,146.854715 189.281943,147.948098 187.774136,148.983935 C186.875251,149.588172 185.976367,150.249957 185.077482,150.825422 C183.714657,151.688619 182.380828,152.609362 180.931014,153.328693 C177.103504,155.227726 173.218002,157.04044 169.390493,158.881927 C167.882686,159.601258 166.37488,160.378135 164.896069,161.183786 C164.635103,161.327652 164.34514,161.759251 164.34514,162.046983 C164.432129,164.751667 164.461125,167.456351 164.722092,170.161035 C164.983058,172.894492 165.475995,175.599176 165.852947,178.332633 C165.997928,179.36847 166.635846,179.886388 167.650716,180.26044 C171.449229,181.670329 175.42172,181.871741 179.365214,182.447206 C180.119118,182.562299 180.873021,182.763712 181.626924,182.792485 C182.003876,182.792485 182.409824,182.504752 182.786776,182.332113 C182.902761,182.274567 183.018746,182.1307 183.134731,182.159474 C184.439564,182.30334 185.802389,182.30334 187.078225,182.677392 C188.006106,182.936351 188.875995,183.569362 189.542909,184.25992 C189.890865,184.605199 189.687891,185.439622 189.77488,186.331593 C190.499787,186.907057 190.528783,188.057987 189.745883,189.036277 C189.281943,189.611741 189.049973,190.388619 188.702017,191.079176 C188.818002,191.165496 188.933987,191.251816 189.049973,191.338135 C188.731014,191.424455 188.383058,191.712187 188.122092,191.597094 C186.933244,191.136723 186.295326,191.99992 185.367445,192.373972 C183.801645,193.006983 181.97488,192.949436 180.322092,193.438581 C178.669303,193.927726 177.161497,193.294715 175.595698,193.265942 C172.37711,193.179622 169.419489,192.690477 166.548857,191.079176 C164.11317,189.698061 161.271534,189.06505 159.03882,187.223563 C158.284917,186.619325 157.589006,185.899994 157.038077,185.123117 C155.269303,182.648619 153.210567,180.317987 152.282686,177.32557 C151.818746,175.886909 151.47079,174.419474 151.064843,172.952039 C150.687891,171.513377 150.310939,170.074715 149.933987,168.520961 C140.771162,170.074715 134.449973,166.506834 131.057408,157.817317 C130.796441,157.989957 130.477482,158.10505 130.361497,158.306462 C128.85369,160.838507 127.084917,163.255459 125.983058,165.960143 C124.997185,168.377094 123.431385,170.074715 121.604619,171.772336 C120.647742,172.664306 120.096813,174.016648 119.313913,175.110031 C118.79198,175.858135 118.154062,176.548693 117.632129,177.296797 C116.76224,178.534046 116.008337,179.828842 115.109452,181.008544 C114.384545,181.986834 113.48566,182.850031 112.702761,183.770775 C111.194954,185.554715 109.774136,187.424975 108.179341,189.122596 C107.106478,190.273526 105.743653,191.165496 104.612798,192.258879 C103.42395,193.381035 102.40908,194.647057 101.220233,195.769213 C100.379341,196.574864 99.3644708,197.179102 98.5235786,197.955979 C98.2336157,198.243712 98.2916083,198.876723 98.0016455,199.164455 C97.4217198,199.73992 96.725809,200.200291 96.0588945,200.689436 C94.5510879,201.811593 92.9852886,202.876202 91.5064782,204.027132 C89.7667012,205.379474 87.6499726,205.293154 85.6492291,205.667206 C84.402389,205.897392 83.06856,205.897392 81.7927235,205.868619 C81.2417942,205.868619 80.7198611,205.52334 80.1689317,205.3507 C79.7339875,205.206834 79.270047,204.976648 78.8061064,205.005422 C76.2254373,205.091741 74.5146566,203.825719 73.0648425,201.811593 C72.4849169,201.005942 71.4120544,200.516797 70.5711622,199.855013 C70.3101957,199.6536 70.0492291,199.423414 69.8172589,199.164455 C68.3384485,197.380514 66.8306418,195.625347 65.4678165,193.78386 C64.6269243,192.632931 63.9890061,191.309362 63.3510879,190.04334 C62.8291548,189.007503 62.3942105,187.942894 62.0462551,186.878284 C61.5533183,185.324529 61.1473704,183.742001 60.7124261,182.188247 C60.4514596,181.23873 60.1035042,180.317987 60.0455116,179.36847 C59.9585228,177.383117 58.8276678,175.484083 59.7265525,173.441184 C59.7555488,173.354864 59.6975563,173.268544 59.66856,173.153451 C58.4217198,169.096425 59.3206046,165.068172 59.6975563,161.011146 C59.871534,159.025793 59.871534,156.982894 60.1325005,154.997541 C60.3354745,153.415013 60.8284113,151.832485 61.1763667,150.27873 C61.2053629,150.134864 61.2343592,149.990998 61.2343592,149.847132 C61.5823146,146.595756 62.336218,143.4307 63.2351027,140.294418 C63.8730209,138.050106 64.6559206,135.86334 65.3228351,133.647801 C65.4388202,133.244975 65.1488574,132.75583 65.2068499,132.353005 C65.3808276,131.317169 65.0908648,130.166239 66.1057347,129.360589 C66.2797124,129.216723 66.3087087,128.842671 66.3087087,128.583712 C66.3087087,127.605422 66.337705,126.598358 66.2217198,125.620068 C66.1057347,124.756871 65.9897496,123.836128 65.5548053,123.116797 C64.4819429,121.390403 64.3079652,120.843712 65.6417942,119.49137 C66.6856603,118.455533 67.9614968,117.247057 69.3243221,116.959325 C70.6871473,116.700366 72.2529466,117.419697 73.7027607,117.851295 C74.7176306,118.167801 75.8484856,118.51308 76.5733927,119.203637 C77.4722774,120.038061 78.0232068,121.217764 78.6901213,122.282373 C79.6759949,123.893674 80.6908648,125.533749 81.5897496,127.202596 C81.9956975,127.9507 82.2566641,128.842671 82.3436529,129.705868 C82.6916083,132.986016 82.9815711,136.266165 83.2135414,139.546314 C83.271534,140.351964 82.9815711,141.157615 82.9235786,141.963265 C82.8945823,142.53873 82.9815711,143.114195 82.9815711,143.689659 C82.9815711,144.150031 83.0105674,144.610403 82.9235786,145.042001 C82.7206046,146.106611 82.4016455,147.142448 82.1986715,148.207057 C81.9956975,149.21412 81.7927235,150.221184 81.6767384,151.25702 C81.531757,152.494269 81.5027607,153.760291 81.3867756,155.026314 C81.2707905,156.23479 81.1838016,157.443265 80.9808276,158.651741 C80.5168871,161.385199 79.9369615,164.089883 79.4730209,166.82334 C79.2990432,167.887949 79.3860321,169.010106 79.270047,170.103488 C79.2120544,170.65018 79.067073,171.196871 78.8930953,171.71479 C78.6321287,172.491667 78.1681882,173.239771 79.2410507,173.815236 C79.3860321,173.901555 79.4150284,174.304381 79.4150284,174.56334 C79.4440247,175.512856 79.4150284,176.462373 79.4150284,177.987355 C80.8648425,177.296797 82.0536901,176.951518 82.9235786,176.232187 C84.5183741,174.879845 85.9101957,173.297317 87.3890061,171.801109 C88.5198611,170.65018 89.6217198,169.470477 90.6945823,168.290775 C91.999415,166.82334 93.2752514,165.384678 94.4930953,163.859697 C95.8849169,162.075756 97.2767384,160.291816 98.5235786,158.392782 C100.14737,155.947057 101.626181,153.415013 103.19198,150.911741 C103.452947,150.508916 103.858895,150.19241 104.177854,149.818358 C104.293839,149.674492 104.467816,149.530626 104.496813,149.357987 C104.612798,147.602819 106.149601,146.653303 106.845512,145.243414 C108.208337,142.423637 109.629155,139.661407 111.049973,136.870403 C111.194954,136.582671 111.484917,136.352485 111.716887,136.093526 C111.861869,135.920886 112.180828,135.805793 112.180828,135.633154 C112.528783,132.525645 114.471534,130.051146 115.5154,127.260143 C116.588263,124.440366 117.748114,121.678135 118.936961,118.915905 C119.197928,118.311667 119.690865,117.822522 120.125809,117.247057 C119.342909,116.239994 120.705735,115.40557 120.618746,114.340961 C120.908709,114.42728 121.140679,114.484827 121.140679,114.484827 C121.372649,113.62163 121.459638,112.815979 121.778597,112.096648 C123.228411,108.64386 124.765214,105.219845 126.157036,101.738284 C126.852947,99.9831167 127.37488,98.170403 127.954805,96.3576892 C129.201645,92.4733026 130.593467,88.6176892 131.637333,84.7045294 C132.536218,81.3092877 133.986032,78.2017784 136.044768,75.3820015 C137.755549,73.0225963 139.6983,70.8070572 141.496069,68.562745 C141.641051,67.6132282 141.612054,66.5486186 141.96001,65.6566483 C142.800902,63.5562022 143.554805,61.4845294 145.294582,59.7293621 C146.599415,58.4057933 147.440307,56.2478007 147.73027,54.3775405 C148.049229,52.1332282 150.339935,49.6875033 152.804619,50.0327821 C154.167445,50.2054216 155.617259,50.0327821 157.00908,50.0903286 C158.632872,50.1478751 160.256664,50.3205145 161.735474,51.126165 C162.924322,51.7879494 164.287147,52.1620015 165.475995,52.8237859 C166.026924,53.1402914 166.490865,53.8308491 166.722835,54.435087 C167.360753,56.1327078 167.708709,57.9166483 168.317631,59.6430424 C168.63659,60.5062394 168.08566,61.6571688 168.027668,62.6930052 C167.969675,63.4986558 167.940679,64.3043063 168.027668,65.0811836 C168.230642,67.2679494 168.549601,69.425942 168.752575,71.6127078 C168.926553,73.5405145 169.013541,75.4683212 169.013541,77.3961279 C169.013541,78.6621502 168.86856,79.9569457 168.752575,81.222968 C168.462612,84.6757561 168.259638,88.1573175 167.85369,91.6101056 C167.592724,93.7393249 166.722835,95.839771 166.60685,97.9689903 C166.490865,99.9543435 165.678969,101.910923 166.287891,103.953823 C166.519861,104.701927 166.258895,105.593897 166.258895,106.399548 C166.229898,109.334418 166.229898,112.269288 166.142909,115.204158 C166.026924,119.261184 165.82395,123.289436 165.649973,127.346462 C165.620976,127.778061 165.59198,128.209659 165.562984,128.641258 C165.389006,131.288396 165.244025,133.964306 164.954062,136.611444 C164.954062,137.158135 164.403132,137.762373 163.881199,138.683117 Z M138.480456,144.063712 C139.524322,144.524083 140.481199,144.783042 141.206106,145.329734 C143.032872,146.710849 144.917631,146.768396 146.918374,145.905199 C148.223207,145.329734 149.470047,144.725496 150.919861,144.034938 C151.296813,138.193972 151.673764,132.209139 152.02172,126.25308 C152.369675,120.412113 152.659638,114.542373 152.978597,108.701407 C152.775623,108.672633 152.572649,108.64386 152.369675,108.586314 C148.339192,120.671072 143.98975,132.583191 138.480456,144.063712 Z M60.5094522,70.9221502 C59.7265525,71.5839346 58.9146566,72.2457189 58.131757,72.9075033 C57.9867756,72.7636372 57.8417942,72.619771 57.6968128,72.4471316 C58.3057347,71.6990275 58.8856603,70.9509234 59.4945823,70.2028193 C60.1614968,69.425942 60.8284113,68.6778379 61.5243221,67.9297338 C61.6982998,67.7283212 61.9882626,67.5269085 62.2202328,67.4981353 C63.1771102,67.4405888 64.0759949,67.5269085 64.4529466,66.232113 C64.5399354,65.8868342 65.8447682,65.7717413 66.5696752,65.8005145 C67.9035042,65.858061 69.2083369,66.0882468 70.5421659,66.2608862 C71.6440247,64.7359048 73.3838016,65.3113695 74.5436529,65.6278751 C77.0083369,66.3184327 79.3860321,67.5556818 81.0968128,69.5698082 C81.531757,70.0877264 81.6767384,70.8646037 81.937705,71.5263881 C82.2856603,72.4471316 82.6916083,73.3391018 82.9235786,74.2598453 C83.3295265,75.9286929 82.3726492,77.7414067 80.6328722,78.2880981 C79.6759949,78.5758305 79.5600098,79.0649755 79.4150284,79.870626 C79.2990432,80.5611836 78.8930953,81.1941948 78.6321287,81.8559792 C78.5161436,81.8272059 78.3711622,81.7696595 78.2551771,81.7408862 C78.5161436,82.3163509 78.864099,82.8918156 79.0090804,83.4960535 C79.2410507,84.5894364 79.1830581,84.6182097 80.4588945,84.7908491 C80.0239503,85.1073546 79.4730209,85.3663137 79.1540618,85.769139 C78.8061064,86.2007375 78.7771102,86.8912952 78.4291548,87.3228937 C77.6462551,88.2148639 76.6893778,89.0205145 75.8484856,89.8837115 C75.6745079,90.0851242 75.5585228,90.3728565 75.5005302,90.6318156 C75.4425377,90.8332282 75.5875191,91.1785071 75.471534,91.2648268 C74.5436529,92.0704773 73.5867756,92.8761279 72.600902,93.6530052 C72.1079652,94.0270572 71.5280395,94.2284699 71.0061064,94.5449755 C69.9042477,95.2067598 68.8313853,95.8685442 67.7295265,96.5591018 C67.5265525,96.702968 67.4105674,96.9907004 67.1785971,97.1057933 C66.8016455,97.3072059 66.337705,97.6524847 65.9607533,97.566165 C63.670047,97.0770201 61.4663295,96.328916 60.0165154,94.4011093 C59.262612,93.3940461 58.6536901,92.2143435 58.334731,91.0058676 C57.7838016,88.8766483 57.4068499,86.7186558 57.1168871,84.53189 C56.9429094,83.2658676 56.9719057,81.9135256 57.1458834,80.6475033 C57.5808276,77.3961279 58.2187458,74.2022989 60.5384485,71.641481 C60.6544336,71.4976149 60.6544336,71.267429 60.7414224,71.0660163 C60.7124261,71.0372431 60.596441,70.9796966 60.5094522,70.9221502 Z M68.3384485,84.8771688 C68.0774819,85.4814067 67.8455116,85.884232 67.7875191,86.3158305 C67.7585228,86.4309234 68.3094522,86.8049755 68.4834299,86.747429 C69.2663295,86.4596966 70.2522031,86.258284 70.7741362,85.6828193 C71.8759949,84.3880238 73.6447682,83.7550126 74.3116827,81.9998453 C74.5146566,81.4531539 75.5585228,81.222968 75.7035042,80.6762766 C76.0514596,79.4102543 76.7473704,79.9857189 77.4432812,80.1008119 C77.8492291,80.1871316 78.2551771,80.2446781 78.6321287,80.2159048 C78.7191176,80.2159048 78.9220916,79.6979866 78.864099,79.6404401 C78.5451399,79.381481 78.1971845,79.0649755 77.8492291,79.007429 C76.9503444,78.892336 76.0514596,78.892336 75.0945823,78.8347896 C74.3116827,79.8993992 73.4997867,81.0503286 72.6878908,82.201258 C72.5429094,82.086165 72.3689317,81.9998453 72.2239503,81.8847524 C72.6298983,81.1366483 73.1228351,80.4173175 73.4127979,79.6404401 C73.5577793,79.2376149 73.5577793,78.3744178 73.3838016,78.3168714 C72.1369615,77.8564996 70.8321287,77.5112208 69.5562923,77.165942 C68.9763667,79.9569457 67.4105674,82.3163509 68.3384485,84.8771688 Z" id="logo-shape" fill={fill} fillRule="nonzero"></path>
      </g>
    </svg>
  )
};