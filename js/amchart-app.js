(function() {
  'use strict';

  angular
    .module("amchart-app", ['amChartsDirective'])
    .constant('DATA', [1.40573819625, 1.16193041108, 0.917840835044, 0.840093997772, 0.816576789964, 0.768682776674, 0.701506115193, 0.602638836991, 0.456257403889, 0.588430824162, 0.889144872382, 1.05326739325, 1.02048211876, 0.961846379476, 0.880130375642, 0.817191317396, 0.929971160735, 0.876812831187, 0.639650532637, 0.470760209886, 0.343400542262, 0.253325475667, 0.172730488401, 0.132801358387, 0.128975716608, 0.123787897338, 0.120644457238, 0.109784982091, 0.132146333155, 0.163861439232, 0.146183047857, 0.136312837259, 0.128464955411, 0.121004839532, 0.0803595197471, 0.0211293945317, 0.00860502877321, 0.0203354020911, 0.0064932167617, 0.00146317486705, 0.000579818027131, 0.00459391098369, 0.00376003627086, 0.00321944720385, 0.00764803958758, 0.00262445101066, 0.00178985361625, 0.00361992419361, 0.00298598780778, 0.00589916769756, 0.0110235781374, 0.00854342838914, 0.00621937624167, 0.00423004428873, 0.0112966818169, 0.0130142315442, 0.00781161834438, 0.00578578621191, 0.00390351837389, 0.000844704594399, 0.000298384443551, 0.000366860150358, 0.00114714201175, 0.00465246373989, 0.001470605062, 0.00947694072082, 0.00647574330685, 0.00428630072472, 0.00900662468503, 0.00337826451903, 0.0155870669721, 0.0143805892047, 0.00936741344473, 0.0172195067023, 0.0202433937088, 0.0279940168345, 0.0250731332318, 0.0197654403563, 0.0246185671071, 0.0446528653669, 0.0591335401567, 0.0834229780402, 0.0668787601024, 0.0922040175828, 0.113861516138, 0.0928964666486, 0.0958089170992, 0.119601673648, 0.159225029582, 0.154263579631, 0.14564835655, 0.134264252268, 0.145081261988, 0.178052819393, 0.234772300374, 0.273374992035, 0.253558924988, 0.263619276609, 0.309194198485, 0.318223213937, 0.365237379356, 0.403157553177, 0.495223488889, 0.550499828385, 0.596624818324, 0.645415875955, 0.671964605582, 0.73459031697, 0.806302955623, 0.847431394425, 0.952018820145, 1.09742230918, 1.16334168299, 1.26391441711, 1.37325035123, 1.45789228927, 1.57135548233, 1.62763751344, 1.7111313974, 1.88407927862, 2.08124178421, 2.22809701478, 2.34031624147, 2.48016398808, 2.62010876139, 2.82003648117, 2.97594733744, 3.35136164189, 3.49167724103, 3.91812760498, 4.31870027212, 4.3032149065, 4.18202251586, 4.27735534955, 4.29895744428, 4.46849628916, 4.61855674264, 4.69905419669, 4.80587484456, 5.06171836727, 5.25183683249, 5.31671585083, 5.27417383781, 5.1297522685, 5.17724110329, 5.32207996375, 5.5155110962, 5.842397543, 5.86974048408, 6.00590947035, 6.29637462717, 6.10109589402, 6.11409861911, 6.28394072333, 6.58828062031, 6.84510825231, 6.89359803999, 7.11888083895, 7.44199033564, 7.74781456318, 7.78419746943, 8.13237437865, 8.42648447658, 8.54931160815, 8.66331144377, 8.57795550594, 8.91759209297, 9.2237289516, 9.53423960083, 9.91419983613, 10.1960485511, 10.2643687294, 10.3540187049, 10.571215096, 10.8186114738, 11.0516784082, 11.3166212282, 11.3890958481, 11.3588734304, 11.241472794, 11.5441724045, 11.973927326, 12.4659079803, 12.595690579, 12.6168894345, 13.1276587116, 13.2635879198, 13.4789844576, 13.6119058097, 13.7237710259, 13.8700645764, 13.9269842394, 13.8204675088, 13.9551405711, 13.8220740364, 13.1557178446, 13.3275782135, 13.7293793165, 13.459359923, 13.4714600027, 13.8748897837, 14.077632727, 14.2958399086, 14.551851456, 14.6483579027, 14.65721745, 14.5164673999, 14.3332146797, 14.495219431, 14.7337578595, 15.0311884697, 15.2895971779, 15.1638991443, 15.0424420031, 15.0573357734, 15.4081091605, 15.9300727894, 15.9825184906, 16.2336240011, 16.5393821236, 16.8873619394, 17.1212977548, 17.3552930646, 17.3231226704, 17.1749634525, 16.8789331909, 16.8267086316, 16.8277735283, 16.6253898123, 16.7936701162, 16.9383846624, 17.0267578472, 17.0087024514, 17.0590429718, 16.8929590551, 16.8361449116, 16.920385797, 16.995836249, 16.9652265971, 16.8935753312, 16.8063951672, 16.8195920286, 16.6463679036, 16.6713276492, 16.7867851453, 16.5935621974, 16.3524654753, 16.173717074, 16.0482901765, 15.9682865477, 15.5690704023, 15.0462823713, 15.0186559738, 15.0283492138, 14.92233264, 14.7820103084, 14.7597331613, 14.565799847, 14.4584419717, 14.4478159718, 14.4326957625, 14.4086641863, 14.2293737572, 14.032863658, 13.9974727278, 13.9862016742, 13.8115251054, 13.7554294348, 13.7117134818, 13.7047910677, 13.6087701427, 13.5466289081, 13.4085920922, 13.2929477129, 13.2018720359, 13.0881952584, 13.0370972828, 12.9941172196, 12.9450984864, 12.7691232794, 12.6374366292, 12.5390253219, 12.4386831234, 12.3106237228, 12.1662003114, 12.1002077444, 12.0313295467, 11.8875061004, 11.7717938103, 11.6190134076, 11.4560235948, 11.2453380167, 11.0449609955, 10.94395276, 10.9737303599, 10.964154799, 10.9101061066, 10.7504797308, 10.5469566579, 10.4241040752, 10.1008806451, 9.7918628135, 9.61583918265, 9.48236026736, 9.2264878193, 8.8270052143, 8.48730322231, 8.23215995258, 8.06411500304, 7.90110561457, 7.69410965627, 7.41186364025, 7.16295829289, 6.99357605957, 6.96693191451, 7.0363961384, 6.96911196961, 6.96310055274, 6.81702144332, 6.63930609795, 6.70532909522, 6.63425967256, 6.55230933705, 6.43953851989, 6.41260751446, 6.40652650195, 6.33717751024, 6.2871055199, 6.13849436004, 6.09325198871, 5.88910112933, 5.70389743016, 5.61125021792, 5.55971618019, 5.52964457528, 5.46194242856, 5.37708391072, 5.32578430338, 5.27627368342, 5.30434334427, 5.26640829228, 5.27400102121, 5.23922621472, 5.15291706633, 5.20559593416, 5.14100334535, 5.06533358661, 4.98226011607, 5.02691860176, 4.90967837672, 4.73341090545, 4.51911190611, 4.33634379213, 4.21801696281, 4.12414273923, 3.92597856938, 3.71665121839, 3.5645644165, 3.40375647732, 3.35373849252, 3.20659284278, 3.1121554704, 2.89865851585, 2.86669090865, 3.07728090738, 1.50809022874, 1.51201953279, 1.60269842443, 1.70791545466, 1.71730163672, 1.70037702215, 1.59220518915, 1.74723391108, 1.90335009752, 2.08120045646, 1.96207395165, 1.9257542388, 1.91619906311, 1.93647143486, 1.89961643985, 2.05551856699, 2.0432962706, 2.14041433673, 1.93111049156, 1.93583817709, 1.9474843812, 1.60658395718, 1.45976740796, 1.30821726263, 1.27301253492, 1.45626577273, 1.22459001596, 1.05876179617, 0.90772973858, 0.898585466004, 0.886261335492, 0.793055368621, 0.73191794197, 0.704802353718, 0.649308395455, 0.540830166344, 0.542920663921, 0.411776932769, 0.356061602548, 0.309306978315, 0.238776927182, 0.174199082327, 0.139616937959, 0.174519096472, 0.174435259799, 0.182397434965, 0.182982697701, 0.147293151925, 0.0895947372458, 0.0904513765463, 0.111102824693, 0.114902963057, 0.108606375092, 0.103792920827, 0.0840387700622, 0.08943759256, 0.0952551999695, 0.0930622702827, 0.101313775527, 0.12570326947, 0.150417873505, 0.119994393936, 0.0678402177249, 0.0501199159074, 0.0474235755732, 0.0502295047748, 0.0568667150031, 0.0605601271868, 0.0711027481534, 0.094672378207, 0.104025002858, 0.0952205496364, 0.122941716178, 0.144306339577, 0.17556091271, 0.187594817761, 0.172950021546, 0.194485499301, 0.197651957401, 0.189590359493, 0.205925818771, 0.231950142881, 0.274810992278, 0.312862720196, 0.322421680908, 0.324629228137, 0.315696515146, 0.308045684618, 0.389488324678, 0.484716039442, 0.602301049146, 0.724186040649, 0.723593046069, 0.742281894505, 0.832305799007, 0.93220755483, 1.03890809408, 1.16113967725, 1.30506605995, 1.40032538464, 1.46560830332, 1.54510157827, 1.7075502951, 1.8257179933, 1.94839766609, 2.04906793012, 2.10338733279, 2.14739907646, 2.15541257039, 2.09476699062, 2.12746246825, 2.19820310378, 2.29827413697, 2.39623112672, 2.48290750263, 2.6247318765, 2.82146117649, 2.86025815789, 2.93632443867, 2.93644241056, 3.12803060336, 3.21603074891, 3.2613318503, 3.45156941055, 3.53216710831, 3.59760350371, 3.71572530684, 3.92236565346, 4.07137737174, 4.34380563418, 4.69399790028, 4.96028607239, 4.92925166307, 4.81003629991, 4.70667545154, 4.96642145823, 5.33064771811, 5.54108418562, 5.45172467321, 5.61503930296, 5.95657731321, 6.19803937747, 6.37195728468, 6.49354072392, 6.63045869851, 6.77759142374, 6.88802819497, 6.94576072276, 7.10220347134, 7.12847938682, 7.22446505281, 7.04874028801, 7.33409228635, 7.95022807306, 8.53877351446, 9.11404411067, 9.41859361298, 9.16298922085, 9.31292355265, 9.54515223154, 9.62574939484, 9.73742395172, 9.85634533992, 9.92889982308, 9.82015812849, 9.41333606782, 10.0002216473, 9.94382645192, 10.0583474819, 10.2213551441, 10.5406009264, 10.9654216348, 11.1489834641, 11.2253192062, 11.4367131986, 11.5748017414, 11.9304397545, 11.7805816002, 11.6240997995, 11.7413594985, 11.9177136085, 12.1436207936, 12.6879414252, 12.7938124854, 12.8382659662, 13.0549243315, 13.3435584051, 13.4679391964, 13.6035977057, 13.8098199489, 13.8972908006, 14.1508054844, 14.2589859356, 14.2473730977, 14.5521117932, 14.5998620831, 14.3531227006, 14.5562138533, 14.4463156132, 14.1272232943, 14.3814977173, 14.6029375827, 14.9193364374, 14.7261869106, 14.4441005889, 14.6061208221, 14.6346929549, 14.678699765, 14.5687442206, 14.5521756248, 14.6310824515, 14.3439757976, 14.3676293667, 14.4802426845, 14.5904566796, 15.0455054566, 15.114376747, 15.4123627599, 15.6667115753, 15.6162177036, 15.6149805528, 15.8595389459, 16.0715269581, 16.1114472562, 16.0988685524, 16.1694107829, 16.2924280818, 15.9680102826, 15.7534748168, 15.7526545789, 15.8821836668, 16.0363383887, 16.2825760255, 16.3380559056, 16.2710825712, 16.2975738721, 16.2912087004, 16.2518339114, 16.0885345152, 15.8323648634, 15.4655008564, 15.2711368251, 15.1492718629, 15.1135513978, 14.973641451, 14.9327792991, 14.8577792441, 14.7248627318, 14.6236226561, 14.5513439709, 14.4226171689, 14.35976254, 14.2579402475, 14.2018042617, 14.1302795507, 13.9042883434, 13.7934046854, 13.694838011, 13.4466531453, 13.3464017767, 13.2727630039, 13.1217594661, 13.0072912562, 12.9063615214, 12.8405890216, 12.7528469918, 12.6525629659, 12.5832684814, 12.5766548654, 12.5724678899, 12.4931497631, 12.3840013877, 12.3373857289, 12.2823324901, 12.2587690398, 12.1689409264, 12.0643970522, 12.0068973376, 11.9370875793, 11.8483163235, 11.7581415043, 11.5705187093, 11.3265721584, 11.0470224727, 10.8868809713, 10.6929896073, 10.5527524336, 10.4200804799, 10.3176534828, 10.2248544402, 10.0445898401, 9.86164828618, 9.73687625577, 9.62827776962, 9.55970577202, 9.4381958727, 9.30306763566, 9.20699375197, 9.1560367891, 9.15390785575, 9.16246958337, 9.15554274051, 9.08970166906, 8.96697991901, 8.96665015078, 8.62231991897, 8.4456814034, 8.28382533732, 8.20581203812, 8.22821333811, 8.10101972368, 7.98375930864, 8.03401236257, 7.98088941297, 7.89438014129, 7.78721115863, 7.59415440366, 7.14692896055, 6.87899650281, 6.76356955381, 6.63026377006, 6.59268263694, 6.45618794048, 6.33540208847, 6.26242244066, 6.36661874479, 6.26516132871, 6.06180346434, 6.12944767677, 5.88661692564, 5.69883294917, 5.4548285415, 5.38108042935, 5.36658166193, 5.2446263399, 5.23454257993, 5.21684767572, 5.16538457344, 5.09638692469, 5.12333332361, 5.07591707423, 5.09992118893, 4.94641883904, 4.95178879978, 4.80335125358, 4.68190064177, 4.43863371149, 4.2811496484, 4.18841439692, 4.07977697855, 4.00669950061, 4.03568189032, 3.94895647088, 3.85093794871, 3.60392077758, 3.33371879858, 3.23337222327, 3.23249219564, 3.44627678994, 3.56936534181, 3.58668122694, 3.7040625146, 3.83541082215, 3.91576566352, 3.70921320684, 1.42119442175, 1.35503955627, 1.39111507734, 1.35352670186, 1.37040223771, 1.35540650412, 1.32440419273, 1.37752195316, 1.40617589303, 1.44001430889, 1.4805878027, 1.447775956, 1.4901714936, 1.46881790839, 1.56859260344, 1.63123463297, 1.63105765479, 1.58963321037, 1.6926725268, 1.70299868512, 1.72472137917, 1.62071941121, 1.56800782667, 1.63825844386, 1.63788624915, 1.59549691006, 1.47727714189, 1.42272113562, 1.44061381057, 1.44516072739, 1.44286648561, 1.55273555421, 1.5567467911, 1.48067910377, 1.50573383511, 1.54171644928, 1.51570693794, 1.50358276259, 1.46492686223, 1.4707942202, 1.42325777293, 1.36927218796, 1.34824234772, 1.35618359757, 1.25442113292, 1.04951773757, 0.941383553346, 0.908422220483, 0.818838717241, 0.759977354159, 0.691303048562, 0.728988420648, 0.954091552003, 0.966992594714, 0.966071046761, 1.02482385722, 1.00160399535, 1.06038985405, 1.00390261046, 0.952891022166, 1.02900171309, 1.0725479923, 1.04738045512, 0.955194496005, 0.86674100598, 0.918442592471, 0.873101881041, 0.893717230344, 0.977109942521, 1.04826569296, 1.09692762196, 1.1546026287, 1.19129653432, 1.20261451688, 1.18642493755, 1.16019099705, 1.20080106263, 1.22263954594, 1.25118930681, 1.23348506056, 1.18840087324, 1.11718532579, 1.0478783796, 0.985528428655, 1.03204558091, 0.972410647402, 0.939364843589, 0.996564964442, 1.10998744086, 1.22196137887, 1.31037330173, 1.39043490612, 1.4292919795, 1.48455548958, 1.58707031233, 1.65126137418, 1.73121313966, 1.80594393305, 1.88384657887, 1.94067420541, 2.00413534727, 2.10338695722, 2.21169984329, 2.29066730667, 2.38283020914, 2.50477166783, 2.65892632007, 2.82334456876, 2.90502025295, 2.98124909306, 3.22609732173, 3.31343866831, 3.50502528527, 3.53017272214, 3.52872467282, 3.62184430066, 3.67764096392, 3.70561930673, 3.81612152535, 3.9954368794, 4.22265433668, 4.39402261225, 4.60791203697, 4.78887369785, 4.90414069368, 4.93395796084, 5.01862618726, 5.21639174101, 5.47054586833, 5.73424066262, 5.98126125335, 6.15312742549, 5.9113481572, 5.93749140364, 6.15603376611, 6.43256168343, 6.72936102281, 6.64062776329, 6.6150978786, 6.86076902708, 7.27291057671, 7.83959497435, 8.24195303623, 8.18256732434, 8.53869388577, 8.81501974892, 8.82231397616, 8.75443173368, 8.79916584823, 9.12775625905, 9.30867138244, 9.48419327146, 9.65472092427, 9.63268855161, 9.85491350176, 10.5110387493, 10.6917526594, 10.8944273169, 11.2134271695, 11.4580468332, 11.0538398013, 10.9261292985, 10.9885911459, 11.1375254601, 11.5511329154, 11.648467692, 11.8375617592, 12.2737891315, 12.5098438357, 12.5767641331, 12.6450312768, 12.8628001631, 12.8654222687, 12.9896620995, 12.9711825081, 12.7220923206, 12.6894533927, 13.1596325176, 13.4605538497, 13.770532237, 14.1145327382, 14.1981170537, 14.3902361123, 14.4556541982, 14.4590057971, 14.7174175427, 14.7437567515, 14.6260464125, 14.7264143708, 14.696451441, 14.7361502521, 14.8871892758, 15.2084122899, 15.5037741829, 15.7575256372, 16.0133873551, 16.1152253946, 16.1233583565, 16.1545665423, 16.225849608, 16.357877085, 16.7944027063, 17.0011816712, 16.838223087, 16.9004882489, 17.1053082631, 17.2327625031, 17.4673293193, 17.3931149927, 17.572299084, 17.581468998, 17.5865379309, 17.7528777893, 17.7618104483, 17.4996403338, 17.2507562148, 16.7376610034, 16.2595801861, 16.8960220555, 16.9679600536, 16.9636232912, 17.005514072, 17.1157805782, 17.1437296776, 17.2702413062, 17.3225334374, 17.2250186543, 17.2458310193, 17.2820794261, 17.2142363088, 17.3032523196, 17.2601690678, 17.3705198456, 17.4162346423, 17.4632829228, 17.5598526574, 17.5575353627, 17.4260876391, 17.3643243783, 17.3517121512, 17.2757692761, 16.9891362838, 16.8188092874, 16.6374645779, 16.4715242794, 16.4333631739, 16.3802315875, 16.3159089573, 16.2638015095, 16.2371282923, 16.227838756, 16.1907683889, 16.0785932994, 15.8365308032, 15.6547589979, 15.4535669148, 15.2504521338, 15.1360865759, 15.0088969498, 14.8478574582, 14.7021965551, 14.6266552532, 14.644065671, 14.5998516319, 14.5313282837, 14.4762278492, 14.4006662956, 14.3520597106, 14.2780296438, 14.2033363386, 14.1279513882, 14.0041332409, 13.7495812406, 13.5997962737, 13.5645543273, 13.4832162418, 13.4034074282, 13.3651487654, 13.2286495001, 13.0335719871, 12.9230252526, 12.7957892335, 12.6941565984, 12.6212325936, 12.5484856931, 12.4106966133, 12.2216348931, 12.0818003173, 11.9012231626, 11.8615659523, 11.6969002439, 11.4606881187, 11.2859002414, 11.1376312237, 11.1824555753, 11.0096926539, 10.7915032267, 10.7136378981, 10.62023746, 10.522816628, 10.4050412739, 10.2070883738, 10.02386487, 9.93172909483, 9.95770581254, 9.75590970462, 9.50781810471, 9.28318458768, 9.10681118717, 8.97100683043, 8.83839200902, 8.71780010618, 8.65935969586, 8.65310856848, 8.67076384181, 8.59797936883, 8.53030974157, 8.45819710041, 8.40198655858, 8.35835224459, 8.16239769023, 7.83728207144, 7.71159782475, 7.46668573521, 7.31939049744, 7.01441831009, 6.83701032343, 6.64700998043, 6.45942400118, 6.29264403578, 6.25535215556, 6.09240447804, 6.13473185656, 6.01531610964, 6.09084574352, 6.00639114069, 6.01225367854, 6.12818127519, 6.03270572863, 5.832296683, 5.70429096006, 5.54161041668, 5.48366519064, 5.43735263527, 5.31227391091, 5.36487277246, 5.45551388826, 5.40909562731, 5.29382981935, 5.19001705058, 5.08274663391, 5.00763328087, 4.94141024951, 4.82657150965, 4.68859647035, 4.63992227608, 4.58055663911, 4.38134702881, 4.19353242247, 3.98607350371, 3.84240827898, 3.72384181322, 3.60978558585, 3.51234915263, 3.24246087538, 2.99024162318, 1.34872886273, 1.17999831011, 0.991322783032, 0.815143618661, 0.755972232879, 0.909026878177, 0.825597099271, 0.759825507896, 0.777996569902, 0.830660348633, 0.985374317325, 1.20910400985, 1.28740026842, 1.24527641956, 1.05393973216, 0.887860173219, 0.757474634456, 0.76700120963, 0.811240608177, 0.842528149798, 0.816186056617, 0.747290486401, 0.632230545531, 0.712425508943, 0.768167629424, 0.708463739329, 0.62931888667, 0.582165700849, 0.5623325612, 0.522152752364, 0.481088289864, 0.403190320139, 0.343794976986, 0.329374313778, 0.314953530446, 0.309916201725, 0.340244821369, 0.344806194797, 0.388013335399, 0.333594173188, 0.258917317687, 0.227168317866, 0.22626561703, 0.155359849106, 0.111146267832, 0.0842085750383, 0.0430000674052, 0.0193652903712, 0.00792741325481, 0.00386255861245, 0.011014998109, 0.0210777401682, 0.0242885437008, 0.0239868622245, 0.0343913581531, 0.0474007616454, 0.0485371873294, 0.0362471093518, 0.0143377370504, 0.0252618394102, 0.0128892692813, 0.0324178244407, 0.0484619894672, 0.0519407891712, 0.0601677158648, 0.06015575715, 0.0637498843428, 0.0790251572681, 0.0680451983697, 0.0942819909745, 0.118905591614, 0.142058830031, 0.150327295554, 0.185582986562, 0.202960087311, 0.224667490817, 0.225291205053, 0.228891000833, 0.234343862349, 0.312275759646, 0.306159311432, 0.334251782307, 0.293683822472, 0.278277765559, 0.277253048485, 0.324222118449, 0.377169798665, 0.443918563096, 0.49948302133, 0.601347217603, 0.694137287471, 0.761254975843, 0.824972667608, 0.888806329217, 0.965700337244, 1.03803519273, 1.1364848169, 1.17672417133, 1.19787666527, 1.26320104483, 1.36013979797, 1.43916965517, 1.52500106522, 1.64658414838, 1.78124162979, 1.9280246198, 2.0345825037, 2.01820763659, 2.06130027006, 2.1918216789, 2.32631458916, 2.44326632688, 2.49579638842, 2.55391661065, 2.61158169885, 2.68374997832, 2.87796338966, 3.02571772376, 3.16841761249, 3.50269019955, 3.73541885213, 3.77668223784, 3.76359468932, 3.80572855972, 3.90379356973, 4.08035613801, 4.22156591497, 4.39159283698, 4.51101567121, 4.67074924441, 4.86344297048, 5.02121794649, 5.27998735495, 5.52391231911, 5.84524746389, 6.19278332739, 6.57632787566, 6.74778298936, 6.95023611046, 7.02559268232, 7.15384146707, 7.29223414839, 7.19084272671, 7.12226675768, 7.36926590009, 7.4975417282, 7.42756160519, 7.56254677907, 7.95641928057, 8.36235309765, 8.87991948412, 8.88858435992, 8.72888234743, 8.41680765961, 8.22091111993, 8.17310640615, 8.37666436869, 8.82850980572, 9.25834107545, 9.39194192173, 9.54070577299, 9.60749415742, 9.95726537123, 10.1380373368, 9.88361207004, 9.71622770229, 9.95769881921, 10.1495972886, 10.2761499854, 10.4400238586, 10.6624899226, 10.9009247726, 11.3151428999, 11.7587671972, 11.7280564272, 12.2673053906, 12.8066992927, 13.2328229529, 13.3509585263, 13.3951895214, 13.8580018773, 14.2956281451, 14.362926114, 14.3870327318, 14.6285618291, 14.134225514, 14.2591391654, 14.2950532073, 14.3647440584, 14.1861721968, 13.9682088071, 14.4290975172, 14.8901377475, 15.2179517372, 15.4187551679, 15.4935610175, 15.5335617533, 15.736322512, 16.0027653039, 16.003143093, 15.8344402116, 15.8843688476, 16.0184312841, 16.2293949745, 16.1878528383, 16.2668581368, 16.4645319972, 16.6995348437, 16.8802175901, 17.0784845668, 17.2456231236, 17.2571612442, 17.2480017697, 17.4337054545, 17.4480731405, 17.5399724836, 17.7227570681, 17.8988775727, 18.0086577285, 18.0831071956, 18.0298837893, 18.1086723181, 18.2208716517, 18.0179267905, 17.7397681312, 17.4340969643, 17.2694727069, 17.0485010885, 16.748718327, 16.8267688308, 16.7169160905, 16.6655063417, 16.6787008845, 16.6034812968, 16.8028444186, 17.0554733911, 17.1828622983, 17.1072696383, 16.8607631005, 16.9074808929, 16.812232991, 16.6665964945, 16.4539098481, 16.4034621686, 16.2731281023, 16.4885587507, 16.4597186159, 16.4559701699, 16.6118743353, 16.5999149577, 16.3929127034, 16.2255580717, 16.2730413087, 16.2584646195, 16.2285356219, 16.2362559024, 16.2306857613, 16.2561892957, 16.1327268891, 15.8785794192, 15.7085841461, 15.7075713457, 15.6248338091, 15.5735493607, 15.3375869809, 15.106758879, 14.9290096252, 14.7254523791, 14.678369453, 14.5702498467, 14.4258811186, 14.0891533879, 13.7119107716, 13.5254437226, 13.3261615525, 13.0977313, 13.0783505246, 12.7078831231, 12.3226229238, 12.2342516214, 11.974704102, 11.7926465536, 11.5434083997, 11.3792962107, 11.1783847644, 10.8677403733, 10.5286355208, 10.2558192294, 10.2175167252, 10.0692975188, 9.92801357923, 9.89507666739, 9.82196673439, 9.81389446021, 9.83219623283, 9.71479547431, 9.59882574082, 9.61463569726, 9.60925149066, 9.52961999295, 9.33346475044, 9.07101731671, 8.85011705509, 8.63467502875, 8.47695610092, 8.38571863253, 8.28594645998, 8.09456755704, 7.89266345625, 7.73886800295, 7.65473091066, 7.53966113245, 7.43192376583, 7.26747936818, 7.04774949269, 6.84578406177, 6.6571027076, 6.6276659456, 6.62850584598, 6.56576368669, 6.5482481174, 6.55697960565, 6.544329483, 6.52547715169, 6.46428727485, 6.37412986039, 6.39129080572, 6.33249680754, 6.2977795969, 6.31069344896, 6.25395464924, 6.15970268649, 6.06902796865, 6.04679173796, 5.97285138647, 5.82552556196, 5.6904713916, 5.58307561035, 5.55015353168, 5.44844772049, 5.3409687813, 5.26289775965, 5.21149534343, 5.17110200017, 5.06927576109, 4.920476538, 4.7701402066, 4.61292134946, 4.39173299317, 4.0315680291, 3.58491694056, 3.28930777048, 3.11791065988, 2.94417531208, 2.6937798457, 2.50693328049, 2.39873334808, 2.13335758153, 2.11497431598, 1.89747936012, 1.68865204007, 1.77897207728, 1.74515724923, 1.47203560701, 1.29062215252, 1.27960128332, 0.969231896976, 0.839268163083, 0.72985692013, 0.669600392797, 0.489306745111, 0.442973544263, 0.322951225512, 0.264406066169, 0.260135730612, 0.23487459966, 0.21608445361, 0.204676230813, 0.217733107412, 0.246847612588, 0.278312506181, 0.296610715548, 0.262265965546, 0.22481399381, 0.210275090195, 0.163054293804, 0.110741776526, 0.0719501793053, 0.043167233932, 0.0296776505536, 0.0236626480467, 0.0148306419422, 0.0018454847988, 0.000259989745212, 0.000306129720781, 0.000297606886168, 0.000430432107656, 0.000440497865736, 0.000179433069064, 0.000177756183404, 0.00105320685141, 0.000143785465576, 0.00123174675935, 0.00154952612482, 0.000257361660845, 0.000640162806282, 0.000502651444162, 0.000544805391118, 0.000362321157141, 0.00148595144444, 0.0013289096787, 0.00370119835451, 0.000874447756523, 0.00060103958574, 0.000218648388242, 0.000177729499566, 0.000190879758623, 0.000642259306825, 0.000185773154509, 0.00220119476903, 0.000853907898671, 0.00503083959609, 0.0169673421277, 0.0183984537235, 0.0191200149882, 0.0040695814153, 0.000972878924731, 0.00172238409578, 0.00838227947318, 0.00460987992727, 0.00597247816169, 0.0122791613797, 0.0254716130853, 0.0501916124396, 0.0507063914966, 0.067352288541, 0.0464538716237, 0.0267465916331, 0.0200253712543, 0.0232751361482, 0.0337996167594, 0.047574784891, 0.085020084631, 0.129662365139, 0.162596653971, 0.138113995697, 0.126171425605, 0.167838780334, 0.211929564068, 0.22233804661, 0.267780996998, 0.320779659331, 0.34906227686, 0.40048362192, 0.420849815392, 0.483455602261, 0.546082958269, 0.567221904486, 0.586481653512, 0.649486905943, 0.72163041412, 0.779864194065, 0.84180814956, 0.896785345542, 0.978887076136, 1.06229658515, 1.16710865162, 1.25185710091, 1.31124776823, 1.36427060633, 1.41217275595, 1.38056193663, 1.45658798666, 1.53395924589, 1.53393769045, 1.56368241507, 1.654160548, 1.7534276305, 1.83787391604, 1.85578158031, 1.93025086055, 2.06007988791, 2.23918138953, 2.33177280282, 2.44399199672, 2.52724211926, 2.68844797003, 2.89071410363, 2.93704112567, 3.0805658167, 3.29807806933, 3.25267117952, 3.32421476725, 3.45150863889, 3.57335212303, 3.73959286912, 4.01099230733, 4.03155541313, 4.18842462481, 4.52039408929, 4.76971650493, 4.94474182767, 5.22852446498, 5.6001071172, 5.82127595587, 5.88494812327, 5.92073131551, 6.13037998481, 5.81830605628, 6.07009817925, 6.16640788702, 6.20980638982, 6.4819520761, 6.55343046735, 6.79138746326, 7.10393769208, 7.22192043641, 7.51784862359, 7.7599528568, 7.6447911765, 7.86071115401, 8.2331223145, 8.79730699271, 8.96278583568, 9.48192400233, 9.95209235951, 10.0559604203, 9.56517963065, 9.26993113224, 9.51347050542, 9.79867747466, 9.87386877383, 10.3235033325, 10.317376567, 10.3247756277, 10.5063358046, 10.8252058145, 10.9781055587, 11.293663927, 11.4636361764, 11.8264373543, 11.9282846699, 12.0931752771, 12.3132494624, 12.4269514381, 12.7920360498, 13.188783149, 13.3514347865, 13.6229519922, 14.0943340308, 14.4049145504, 14.6700638499, 14.4253109881, 14.6309598167, 14.9532641818, 15.2882912081, 15.6840916342, 16.0776971924, 16.6384293405, 17.1213457493, 17.2005291542, 17.0586765027, 17.113308033, 17.1873708325, 17.0996125449, 17.0241646681, 17.1655542067, 17.3152798166, 16.9101127397, 16.4587063208, 16.4557235175, 17.007302091, 17.289458268, 17.4644534382, 17.712135875, 17.6820583935, 17.2847988541, 17.4180123338, 17.6083343857, 17.8772443022, 17.7625270085, 17.8298877261, 18.3404496784, 18.3407915876, 18.4693029097, 18.4816557057, 18.33512061, 18.3742085928, 18.666654859, 19.0020263369, 19.3513283925, 19.385115008, 19.1373032809, 19.0509795422, 19.1441112611, 19.2259927526, 19.3898801683, 19.2971392711, 19.0249103256, 18.7335205732, 18.6461946502, 18.4622424127, 18.3918073734, 18.2518469528, 18.1066887547, 18.0623393632, 17.8457555792, 17.7395995498, 17.6733562737, 17.3917391396, 16.9194909879, 16.6023747214, 16.4442262451, 16.4725664731, 16.6066050778, 16.5270251084, 16.5240114198, 16.4349087428, 16.3199802119, 16.2790235598, 16.2523392176, 16.233815295, 16.02110615, 15.7734615158, 15.6572180439, 15.6183444948, 15.5483789188, 15.4757327498, 15.3405064517, 15.2557102105, 15.1278443684, 15.037236243, 15.0381262073, 14.8822387893, 14.5952029494, 14.2774138522, 14.0663975853, 13.9804868933, 13.8984734527, 13.8193370408, 13.6841765864, 13.4988634262, 13.2850378002, 13.0549580604, 12.8297736781, 12.6900212846, 12.5540156711, 12.3808312041, 12.1394629954, 11.7417971377, 11.4020749361, 11.0382963921, 10.4896611195, 10.2707513238, 10.0667370698, 9.85130615853, 9.80041817178, 9.74750711292, 9.50647226474, 9.29028634738, 9.05062278966, 8.90868228324, 8.81750222015, 8.64715162391, 8.57975341602, 8.64720391001, 8.48262990694, 8.4308200154, 8.46453321518, 8.36984053952, 8.28113993704, 8.35738193191, 8.23158692665, 7.99424513826, 7.81298049324, 7.52627491458, 7.22098455222, 7.1666218115, 7.15997501381, 6.97205539103, 6.88004076474, 6.84126389407, 6.71615137514, 6.65844208791, 6.52481878827, 6.32673822548, 6.22213765781, 6.03402239163, 5.95466448287, 5.82167901292, 5.64576629539, 5.32999824815, 4.87438484267, 4.50278217986, 4.15671481362, 3.84725562906, 3.54484402672, 3.15462938996, 2.79460449984, 2.50343214323, 2.32394303076, 2.44844106715, 2.43593428253, 2.297120056, 2.19736851337, 2.05894403308, 1.90367488375, 1.7619641645, 1.76203244537, 1.58894182448, 1.42209326577, 1.23472376579, 0.984546169669, 0.858149022653, 0.960591930892, 0.911980629658, 0.749613218352, 0.597229295164, 0.473820697827, 0.486607080134, 0.402457268064, 0.371701636905, 0.350064479933, 0.273308654349, 0.204213724787, 0.221083086314, 0.244995231037, 0.278980332857, 0.253731420579, 0.167063600031, 1.38489582259, 1.12240224058, 0.956263023097, 0.911340222926, 1.02019338469, 1.09124299168, 1.08655798422, 0.951888391408, 1.07574710345, 1.05619027255, 0.915364520895, 0.841385357732, 0.724293657757, 0.568970786009, 0.439849918077, 0.535799595012, 0.615568969352, 0.570266665898, 0.511119470144, 0.454074937883, 0.429308887503, 0.415212467304, 0.349066941129, 0.35028593269, 0.339065312777, 0.210431683148, 0.130604961797, 0.0928624683487, 0.127427892942, 0.171989787481, 0.187798979828, 0.176243796397, 0.179835639236, 0.233650366922, 0.321507158152, 0.31790856717, 0.278872209075, 0.254815459973, 0.288019000505, 0.284840798346, 0.253729946357, 0.276064594267, 0.183159973306, 0.105515541686, 0.0865540116822, 0.0416889008, 0.0138919153623, 0.00644699073645, 0.00399619922806, 0.00672839151155, 0.00680692644807, 0.00571095169344, 0.00633006151018, 0.00701611906866, 0.00675763082578, 0.00198213639735, 0.000840887366968, 0.00358398936868, 0.00539595680478, 0.00665235042075, 0.0133462373754, 0.0232842070962, 0.0184742196782, 0.0259533753649, 0.0231005497867, 0.0142806284232, 0.0215662335308, 0.0444870778656, 0.0692993179672, 0.0769404510015, 0.0816621505533, 0.0951469850181, 0.101171647419, 0.0724644237633, 0.0503754460945, 0.0175207131352, 0.0228549735094, 0.0428469994584, 0.0776629942652, 0.09053824416, 0.150003749909, 0.168977088146, 0.183979768166, 0.16054228226, 0.132857161727, 0.171172721505, 0.228158662726, 0.240091293636, 0.232488504319, 0.272620409046, 0.328199135784, 0.383651290367, 0.4465734186, 0.503773611842, 0.578595136665, 0.655351128302, 0.685024431731, 0.734510606553, 0.781549566366, 0.86294739871, 0.943595883104, 1.03507413762, 1.11053036967, 1.16566953442, 1.21889914134, 1.26410203046, 1.33315211588, 1.39937224366, 1.54884060652, 1.62407430596, 1.68271320684, 1.79189497615, 1.86798648161, 1.95678613505, 1.99955296883, 2.03962200932, 2.14890658242, 2.33291319109, 2.4569067171, 2.57857708794, 2.74895503484, 2.87072929524, 2.91565143173, 2.97316422168, 3.06719059539, 3.19193308626, 3.36701460636, 3.7740063814, 4.0315743846, 4.20369165984, 4.37371184778, 4.44489806265, 4.47148305917, 4.43851844018, 4.5962948938, 4.74652413719, 4.82240791635, 5.07457727123, 5.1547773112, 5.47432539424, 5.61710949808, 5.7748090572, 5.87019316285, 5.97700702993, 6.15172004953, 6.55388592185, 6.57941258699, 6.66728005703, 6.76455171901, 6.96361477858, 7.26348320771, 7.52524433729, 7.73377320654, 8.19978931091, 8.61158201886, 8.75718404533, 8.96113414633, 9.21625021098, 9.64614764577, 9.98277647899, 10.7005991687, 11.435048475, 12.0027200168, 12.1839451792, 12.0995400336, 12.0594321914, 12.0329605561, 12.1413190795, 12.2036454892, 12.2854705736, 12.4109160118, 12.6056053011, 12.7704301562, 12.5052383137, 12.3227624437, 12.7064986487, 12.9512617822, 13.0986514554, 13.5297711237, 14.1345056328, 14.298234785, 14.6562726798, 15.1131459084, 15.3546466535, 15.4195995516, 15.7169621598, 15.9337013374, 16.2841521537, 16.6097560508, 16.9252689807, 16.9767100463, 17.0608764809, 17.0066283644, 16.6696247277, 16.5692684888, 16.4854649856, 16.6401753596, 16.9482511067, 17.0641942341, 17.1641506825, 17.5647654269, 17.797197592, 18.1941364718, 18.5352515144, 18.458431075, 18.332182157, 18.6841869554, 18.9154809935, 19.2491803358, 19.4978637188, 19.9169805666, 20.0546406823, 20.1480237212, 20.196192742, 20.4625097499, 20.374706039, 20.3679397986, 20.1973330986, 19.9909010988, 19.5238945948, 19.3377738431, 19.3566752593, 19.1110165136, 19.1580585921, 19.2333439864, 19.1725049636, 19.0862294544, 19.151356325, 19.1644676692, 19.2777044372, 19.3076029287, 18.9489001873, 18.9852538821, 19.0043096186, 19.1643644441, 19.2290112539, 19.1088557241, 19.0371687388, 19.0528375972, 18.9825999247, 18.8715526025, 18.8381488016, 18.8449827143, 18.8445064167, 18.7506490388, 18.7308707778, 18.6331719374, 18.5393048068, 18.3633727072, 18.0589620059, 17.9684200148, 17.9886882129, 17.8585725256, 17.7715581391, 17.5902498912, 17.3421684694, 16.8816436593, 16.6109226998, 16.424247167, 16.3459253396, 16.260280346, 15.9645469183, 15.9558856512, 15.9156810827, 15.7597999795, 15.439677011, 15.1816242246, 15.0856738375, 15.0320035373, 14.9062204224, 14.6517774092, 14.5351623064, 14.4575094699, 14.3642978939, 14.2554680409, 14.2148158398, 14.1010651023, 13.7960143231, 13.6230273592, 13.3950811966, 13.23425746, 13.0755821106, 12.9070842979, 12.7015096345, 12.4487617117, 12.2116447363, 11.9641497289, 11.7841259727, 11.5499010679, 11.2857903734, 11.290409683, 11.2915563026, 11.0986493724, 10.8159864024, 10.6466174113, 10.5495914348, 10.4019787607, 10.2560036825, 10.166018814, 10.1814846398, 10.190250651, 10.1589434483, 10.0432573077, 9.9441345603, 9.82478117946, 9.80618159171, 9.69408303478, 9.63096967851, 9.62855674582, 9.63218858257, 9.60364926001, 9.48008616578, 9.38026628715, 9.23882055859, 9.09496742486, 8.9703944462, 8.88101177338, 8.75160612987, 8.50601366123, 8.30675949011, 8.05893369075, 7.85133150833, 7.80737425381, 7.68390396004, 7.76157464628, 7.68125977704, 7.67626708372, 7.80175922302, 7.76518522849, 7.67016310837, 7.61953894818, 7.30523591377, 7.05342203408, 7.21196106139, 7.14228372956, 7.11408960119, 6.94596839996, 7.05685419468, 6.83159646401, 6.60112032328, 6.42955145334, 6.28615104307, 6.46807444404, 6.36243917633, 6.08163214627, 6.04613534876, 6.13485207238, 6.08913258547, 5.96868206, 5.85705488144, 5.75945200057, 5.78064203186, 5.75501159678, 5.58459629607, 5.42233039444, 5.25920776672, 5.30041025594, 5.25566977176, 5.20862873797, 5.2417800459, 5.15338134082, 4.870281133, 4.97379127523, 4.82876035592, 4.56858183038])
    .constant('DATE', '2006-01-01')
    .controller('appController', function($scope, DATE, DATA, $filter) {


        var data = DATA.slice(0,1100);
        var dates = data.map(function(value, daySince) {
          var di = new Date(DATE);
          di.setDate(daySince);
          return 
        });

        
        var readyData = data.map(function(value, daySince) {
          var di = new Date(DATE);
          di.setDate(daySince);
          return {
            date: di,
            value: value
          };
        });

      $scope.amChartOptions = {
        data: readyData,
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "autoMarginOffset": 20,
        "valueAxes": [{
          "id": "v1",
          "axisAlpha": 0,
          "position": "left"
        }],
        "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
        },
        "graphs": [{
          "id": "g1",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "red line",
          "useLineColorForBulletBorder": true,
          "valueField": "value",
          "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
        }],
        "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis": false,
          "offset": 30,
          "scrollbarHeight": 80,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 0.5,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount": true,
          "color": "#AAAAAA"
        },
        "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 0,
          "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true
        },
        "export": {
          "enabled": true
        }
      };

    });

})();