const getTotalDistancebetweenListItems = (listOne, listTwo) => {
  listOne.sort((a, b) => a - b);
  listTwo.sort((a, b) => a - b);

  let totalDistance = 0;

  listOne.forEach((item, itemIndex) => {
    totalDistance += Math.abs(item - listTwo[itemIndex]);
  });

  return totalDistance;
};

const distance = getTotalDistancebetweenListItems([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]);

console.log(distance);

const firstList = [87501,
70867,
12959,
56898,
80416,
28886,
79252,
47576,
43354,
89248,
39921,
98636,
33277,
45307,
33326,
14449,
64412,
12630,
35665,
35932,
22757,
97387,
83599,
33718,
20879,
42419,
50241,
94123,
82872,
41378,
81233,
98875,
21517,
36314,
64212,
94404,
42166,
13351,
53796,
19837,
59598,
47765,
11282,
71285,
27075,
11470,
75795,
77811,
56347,
54911,
26533,
75314,
49216,
94855,
10775,
58190,
38228,
88321,
99407,
39166,
22369,
61678,
94911,
99565,
64630,
60973,
83684,
44345,
43964,
13207,
20848,
43944,
48992,
44659,
93179,
80123,
46758,
34750,
38136,
25072,
99637,
42591,
48968,
68846,
63257,
20217,
50862,
35900,
61185,
41487,
29962,
44777,
40743,
57518,
89369,
36269,
59657,
72361,
71609,
76578,
35670,
99141,
30841,
91034,
70937,
65910,
62321,
39367,
39883,
15590,
70456,
21706,
91933,
88390,
24955,
87059,
33177,
57578,
24831,
19693,
87500,
88393,
18468,
61548,
75166,
80975,
54909,
85260,
86203,
75868,
57081,
44633,
53395,
38922,
45580,
11492,
13813,
77790,
97416,
60784,
91432,
64293,
53735,
11377,
35848,
29067,
14215,
72068,
23691,
17111,
66651,
35155,
76500,
59018,
51786,
12770,
41212,
85299,
58892,
46842,
80228,
21816,
63096,
55837,
13699,
88678,
17917,
42692,
42536,
29227,
44887,
14869,
62941,
96430,
92100,
69859,
78066,
71937,
79682,
90428,
17489,
12443,
92963,
13845,
27104,
84047,
17026,
16587,
38434,
96992,
60514,
76740,
77040,
57707,
18252,
50362,
87527,
18024,
16185,
15836,
71453,
81519,
92269,
89510,
64230,
44965,
97898,
33394,
51205,
29970,
18703,
95881,
78977,
44185,
59579,
98081,
75176,
23052,
23648,
68646,
81344,
89002,
91635,
83079,
19710,
55515,
94625,
95178,
43069,
32573,
28551,
71918,
64790,
70603,
98971,
26316,
56050,
70043,
89213,
19535,
75037,
56394,
10420,
97325,
79627,
90943,
89009,
41714,
56219,
67414,
70637,
65116,
65081,
30062,
53883,
82201,
30366,
92536,
41242,
28183,
95821,
70104,
92750,
19452,
63808,
48841,
78057,
18349,
49722,
47153,
87301,
62420,
77680,
27690,
59409,
42268,
63330,
36144,
31999,
63097,
32578,
37261,
75864,
49682,
19524,
21013,
28003,
69912,
56391,
55578,
66306,
50485,
17388,
68640,
34002,
53182,
26868,
54480,
78677,
63487,
96563,
63947,
95430,
66914,
17750,
44339,
91997,
19858,
39187,
31250,
81979,
43865,
41577,
59486,
84822,
83663,
53342,
88483,
26040,
59222,
28173,
47265,
98279,
74690,
50359,
24495,
67473,
31605,
47293,
78146,
62042,
22969,
86262,
20100,
31926,
83586,
78067,
15120,
60964,
25983,
22555,
82691,
33704,
60332,
88891,
11798,
33296,
21560,
72107,
99423,
74019,
11793,
24580,
29058,
13516,
45127,
78583,
47357,
74336,
73563,
48046,
99277,
51620,
26126,
39198,
99101,
53868,
60036,
98998,
33596,
96813,
63461,
44286,
32282,
40326,
31739,
86081,
17565,
98499,
54371,
64366,
22558,
80145,
55344,
82390,
67477,
41679,
26759,
25479,
84759,
23922,
69409,
16130,
17075,
26992,
75638,
40799,
70389,
48822,
82741,
53111,
96714,
61824,
80721,
14154,
65521,
62357,
17248,
62195,
31347,
21582,
67200,
32845,
69303,
43616,
70647,
37198,
56883,
55553,
44144,
93899,
94230,
92309,
69517,
30628,
14181,
86696,
92793,
26915,
32013,
81917,
85533,
10291,
47306,
40182,
78380,
14074,
29716,
34074,
83682,
32571,
24215,
14613,
86190,
22056,
47602,
40618,
61777,
83610,
41123,
14249,
49493,
42659,
38055,
49301,
92652,
96637,
63286,
64698,
48939,
77435,
86082,
56906,
18370,
55583,
10163,
57905,
62348,
84711,
14792,
27680,
90559,
56049,
30776,
25298,
72656,
74027,
79517,
70497,
67662,
71206,
14457,
79508,
69184,
18264,
16462,
48031,
85157,
12794,
56636,
63663,
83754,
90766,
48559,
95519,
24578,
13264,
72984,
23859,
52266,
74332,
40908,
45622,
97941,
29959,
75077,
43027,
75223,
46175,
60194,
63100,
41845,
33956,
71994,
32196,
26319,
52113,
45378,
29872,
45386,
50436,
59375,
29944,
80342,
10493,
97587,
59750,
88477,
95607,
81650,
89497,
60828,
18759,
25409,
42395,
42537,
23075,
33176,
61312,
49549,
13037,
22694,
55457,
41517,
62998,
33002,
19731,
37666,
44046,
16308,
39639,
52166,
18885,
52717,
54738,
30354,
71905,
53902,
49202,
29053,
73107,
10814,
47137,
14681,
23659,
41523,
37342,
14677,
80367,
29514,
92987,
53999,
53071,
18116,
41120,
24265,
74236,
16153,
29225,
77153,
11156,
17676,
97762,
14294,
20945,
89054,
50026,
11773,
43398,
81325,
72450,
73264,
11738,
47816,
96440,
49621,
99276,
83302,
44195,
72375,
62769,
24836,
54126,
56172,
40147,
15109,
36959,
72676,
29907,
17101,
27776,
33908,
31997,
60558,
76898,
66530,
55325,
14813,
65149,
64181,
13236,
85280,
23433,
76693,
27598,
85215,
69326,
73527,
83772,
13383,
74846,
76968,
67965,
75669,
11827,
65958,
27705,
29880,
64798,
15552,
81369,
16035,
19559,
58504,
53208,
72798,
63911,
73341,
57970,
34600,
32884,
71749,
16407,
48023,
55208,
87016,
61959,
14403,
61664,
84201,
73175,
75814,
91655,
33948,
80300,
70886,
41410,
78044,
32339,
16859,
10047,
23013,
37757,
28383,
88083,
91191,
21219,
68359,
36728,
83279,
30823,
94846,
45506,
33240,
65845,
45314,
94477,
41623,
18698,
26025,
67139,
70864,
63628,
82479,
56207,
18780,
61220,
94501,
58257,
16437,
89620,
74771,
99455,
77273,
20854,
43825,
89584,
86772,
16169,
23079,
20347,
33162,
77049,
52391,
98777,
86182,
84991,
46587,
13200,
76967,
56719,
77987,
74246,
68857,
92089,
79803,
16391,
85511,
14130,
20211,
51868,
11881,
43073,
74013,
63581,
67718,
95358,
78186,
35563,
63140,
11832,
11698,
22084,
98044,
26094,
45393,
38527,
66819,
31166,
39568,
94063,
16452,
24171,
74980,
47814,
71716,
34263,
43631,
47023,
56699,
13150,
65739,
87085,
67283,
23771,
65647,
50600,
88186,
48164,
34469,
76035,
91266,
55549,
34832,
72693,
66050,
50769,
34690,
58125,
16861,
26369,
31834,
24724,
35677,
79253,
29593,
29695,
18196,
33927,
24378,
37505,
70048,
27708,
14952,
37930,
41197,
77433,
77320,
37592,
73963,
67891,
71199,
13884,
97681,
44494,
56856,
56521,
11077,
98851,
19484,
51325,
74821,
90241,
24897,
40386,
66435,
17691,
17430,
76735,
23936,
86656,
81533,
23473,
44831,
73390,
20456,
47304,
95484,
40033,
49629,
11518,
99642,
46027,
93133,
88453,
52465,
65679,
51133,
82072,
65019,
73181,
25682,
89215,
75313,
59429,
95353,
14199,
28894,
34814,
12462,
77803,
54077,
56105,
49225,
33427,
28144,
44230,
64121,
44223,
91417,
27420,
49221,
37139,
65039,
40544,
70621,
89720,
93652,
99679,
48132,
27910,
61906,
79192,
52071,
68413,
38094,
85325,
34519,
18347,
74130,
22266,
24902,
58897,
67166,
86035,
32151,
19735,
86835,
48502,
98335,
85776,
31060,
51185,
10538,
89716,
93969,
87113,
94835,
31171,
63678,
27983,
31882,
69310,
57748,
34236,
22019,
40783,
11443,
61587,
32107,
42950,
30318,
71868,
11717,
15069,
46368,
19544,
96045,
70708,
66286,
93443,
22988,
59398,
54189,
44636,
34569,
75207,
57213,
17661,
76744,
18525,
44095,
47905,
64998,
94932,
79764,
94708,
97002,
65044,
81636,
67614,
69858,
37652,
59098,
26949,
19239,
46003,
77640,
92129,
46524,
11683,
72664,
80935,
12683,
47561,
97326,
91545,
50527,
78000,
58880,
47352,
64943,
34249,
90703,
42396,
17077,
40369,
17581,
18310,
93377,
21337,
31532,
63298,
39119,
53668,
50927,
57380,
68451,
96725,
49778,
46687,
93651,
17709,
36657,
67669,
18254,
99194,
51889,
11292,
39589,
14716,
71832,
54150,
36451,
14806,
63718,
58557,
98671,
48004,
20103]

const secondList = [
  76559,
  16862,
  38527,
  81917,
  13287,
  54457,
  30354,
  88490,
  37397,
  74846,
  24805,
  51185,
  31605,
  13417,
  72874,
  42023,
  40326,
  40326,
  41197,
  59560,
  76636,
  91997,
  74846,
  54077,
  65995,
  35638,
  41197,
  27231,
  65149,
  85282,
  65415,
  21219,
  81917,
  65845,
  43331,
  34854,
  87444,
  12627,
  47507,
  28551,
  71749,
  93643,
  91997,
  69206,
  56104,
  50196,
  17345,
  85578,
  74690,
  35921,
  96584,
  58859,
  30077,
  14154,
  91997,
  81917,
  85154,
  21470,
  38527,
  13647,
  96563,
  29486,
  64616,
  66640,
  86818,
  22185,
  27341,
  22530,
  11793,
  62913,
  30354,
  38527,
  38527,
  10142,
  96119,
  86215,
  75732,
  18011,
  92652,
  58141,
  96563,
  32117,
  60830,
  15876,
  19695,
  69184,
  86772,
  31605,
  10607,
  98125,
  81917,
  73031,
  25415,
  13407,
  36534,
  31605,
  27902,
  51185,
  15589,
  19417,
  18977,
  95960,
  55313,
  30354,
  81509,
  12959,
  74690,
  79276,
  23467,
  54077,
  26094,
  97640,
  26097,
  65845,
  91997,
  71437,
  86262,
  84284,
  21219,
  74846,
  20041,
  50151,
  69184,
  69184,
  74739,
  52736,
  58854,
  61330,
  15355,
  81154,
  81917,
  41212,
  92203,
  84627,
  22005,
  12959,
  23052,
  31605,
  41197,
  40326,
  12377,
  74468,
  54077,
  23052,
  57154,
  57838,
  61664,
  30354,
  58540,
  28991,
  12959,
  25057,
  74690,
  78562,
  64460,
  80286,
  53868,
  46294,
  21646,
  31347,
  82547,
  41197,
  69071,
  74130,
  99276,
  23052,
  65679,
  28551,
  90759,
  74130,
  47070,
  96563,
  87555,
  52517,
  96563,
  65845,
  55780,
  80440,
  46524,
  37542,
  76606,
  48973,
  12959,
  39796,
  19295,
  92652,
  54077,
  14154,
  61664,
  78286,
  74130,
  31347,
  71639,
  69864,
  74823,
  92774,
  54077,
  62644,
  99146,
  31347,
  22056,
  20539,
  41197,
  98904,
  65845,
  69184,
  50122,
  71749,
  31347,
  91997,
  38527,
  85733,
  65679,
  42353,
  79102,
  88026,
  28551,
  25529,
  86507,
  65149,
  94453,
  23057,
  92652,
  54077,
  96563,
  31857,
  45828,
  40326,
  41940,
  48931,
  28551,
  31605,
  25534,
  80997,
  60973,
  45940,
  47638,
  86262,
  96563,
  86236,
  86262,
  30161,
  38501,
  34627,
  38019,
  64789,
  65149,
  74846,
  30354,
  33426,
  91997,
  68219,
  92652,
  28551,
  74846,
  35608,
  36832,
  34251,
  23208,
  95131,
  20974,
  53868,
  81866,
  31605,
  40326,
  74690,
  28551,
  23052,
  69184,
  92162,
  17834,
  60858,
  46524,
  17204,
  92652,
  28551,
  17663,
  77627,
  23179,
  44128,
  30185,
  39103,
  10428,
  64324,
  86615,
  57384,
  14804,
  23052,
  16437,
  63279,
  38527,
  97228,
  69184,
  51185,
  69184,
  74846,
  30764,
  21219,
  30346,
  49614,
  41212,
  86772,
  19044,
  70185,
  12959,
  31260,
  85956,
  81917,
  14154,
  11742,
  11075,
  93422,
  12959,
  26106,
  67408,
  28563,
  88705,
  31347,
  64385,
  22924,
  52034,
  12959,
  23813,
  53868,
  17936,
  97323,
  74690,
  86772,
  69495,
  54077,
  74130,
  81917,
  41212,
  14154,
  51869,
  20705,
  87533,
  80541,
  74514,
  86772,
  85287,
  41212,
  54077,
  65149,
  54077,
  54077,
  95893,
  71749,
  23992,
  16437,
  53868,
  31347,
  57047,
  41212,
  65325,
  65149,
  68013,
  26483,
  54077,
  89201,
  22056,
  40534,
  22865,
  50197,
  46524,
  38128,
  57894,
  79056,
  14506,
  49268,
  97654,
  51185,
  31605,
  65845,
  21219,
  99276,
  64405,
  11401,
  52794,
  51185,
  91997,
  44849,
  80748,
  30354,
  78198,
  52858,
  65845,
  61664,
  24285,
  94740,
  31734,
  32214,
  14154,
  41197,
  88528,
  14608,
  31367,
  65387,
  91997,
  65149,
  75593,
  91408,
  98553,
  68977,
  26094,
  21219,
  65149,
  33364,
  96563,
  69184,
  96563,
  15744,
  70938,
  16437,
  94424,
  32249,
  29513,
  86314,
  74130,
  29558,
  31605,
  96563,
  65679,
  91305,
  21219,
  15109,
  59832,
  79552,
  12959,
  99276,
  11773,
  91997,
  57895,
  86262,
  86772,
  96563,
  31347,
  51680,
  69184,
  79659,
  81917,
  65845,
  30354,
  46524,
  77073,
  77596,
  22388,
  69973,
  86262,
  74442,
  55123,
  94023,
  94250,
  92652,
  72817,
  96746,
  41212,
  53868,
  19412,
  65149,
  42058,
  97780,
  31605,
  69184,
  96944,
  99796,
  99276,
  28809,
  81543,
  31605,
  69184,
  55495,
  23052,
  23052,
  89829,
  86262,
  34083,
  31376,
  36800,
  65845,
  47116,
  17103,
  31347,
  24527,
  85310,
  81917,
  53868,
  82675,
  67521,
  69184,
  23052,
  12959,
  27743,
  15605,
  43790,
  14154,
  29964,
  53868,
  27144,
  14154,
  27923,
  37044,
  65679,
  41197,
  72533,
  76897,
  69795,
  54077,
  41212,
  78373,
  51133,
  19241,
  85483,
  81917,
  30354,
  55110,
  38527,
  17528,
  15275,
  92652,
  51185,
  77172,
  96563,
  40326,
  16437,
  64996,
  65664,
  53868,
  53868,
  60061,
  21219,
  69184,
  41212,
  86772,
  73365,
  71749,
  15595,
  92903,
  77585,
  16437,
  30354,
  27763,
  40372,
  74846,
  69981,
  81778,
  50866,
  72519,
  80344,
  34728,
  35278,
  58851,
  51185,
  16437,
  51185,
  23052,
  83743,
  53981,
  45117,
  53704,
  93596,
  81917,
  81917,
  46524,
  19157,
  19877,
  74712,
  35820,
  30354,
  68638,
  44546,
  13219,
  12959,
  30354,
  21219,
  13890,
  12238,
  40253,
  16518,
  69767,
  15109,
  72608,
  69184,
  74130,
  53868,
  69842,
  92308,
  35864,
  46524,
  76898,
  94665,
  14831,
  45600,
  33630,
  38527,
  26094,
  86262,
  66242,
  82631,
  19298,
  30354,
  41212,
  12959,
  53521,
  84315,
  48388,
  44227,
  50902,
  57407,
  59056,
  92652,
  38484,
  41212,
  60338,
  29376,
  12210,
  74690,
  81185,
  86262,
  42618,
  75101,
  25972,
  27380,
  28959,
  65845,
  16437,
  31605,
  54077,
  50003,
  90621,
  86772,
  51536,
  99132,
  71623,
  13380,
  99706,
  54077,
  83668,
  37851,
  20138,
  86262,
  13132,
  34135,
  41212,
  96563,
  44868,
  54077,
  86272,
  81361,
  40326,
  85531,
  49989,
  39922,
  47921,
  38527,
  88919,
  71284,
  20794,
  74846,
  12488,
  16437,
  65638,
  98512,
  23052,
  69184,
  76898,
  65149,
  16437,
  58862,
  18026,
  30354,
  31605,
  22056,
  39425,
  23844,
  21148,
  53868,
  54326,
  81111,
  55929,
  72588,
  60851,
  40326,
  21219,
  61445,
  95859,
  91997,
  91997,
  81917,
  96563,
  28719,
  20565,
  86772,
  12959,
  23052,
  68150,
  53868,
  47083,
  10169,
  38161,
  44175,
  46524,
  32934,
  91997,
  40324,
  74130,
  41212,
  87585,
  40326,
  91997,
  12771,
  53321,
  61664,
  11773,
  19105,
  77697,
  76064,
  14887,
  76667,
  65149,
  38542,
  41197,
  78717,
  23052,
  65845,
  44983,
  86083,
  82407,
  31605,
  65845,
  35534,
  17074,
  87808,
  95379,
  91997,
  75679,
  38527,
  12888,
  61664,
  92652,
  54077,
  58297,
  11865,
  64989,
  35964,
  92652,
  93080,
  46524,
  52386,
  79757,
  77614,
  83128,
  91977,
  12959,
  38527,
  45179,
  14154,
  53868,
  99276,
  27179,
  41212,
  46524,
  60735,
  21219,
  32301,
  55281,
  45366,
  54121,
  86262,
  21705,
  97022,
  69184,
  65149,
  38480,
  74690,
  65149,
  63440,
  91929,
  37769,
  65845,
  65845,
  74130,
  76898,
  46524,
  16437,
  31347,
  51028,
  96563,
  74846,
  16437,
  47616,
  31232,
  53750,
  92748,
  53868,
  28551,
  38527,
  54519,
  82995,
  65149,
  66894,
  71879,
  73982,
  33048,
  21083,
  62395,
  48031,
  40326,
  49244,
  46916,
  19011,
  65679,
  78808,
  60176,
  30354,
  10877,
  88972,
  96495,
  57514,
  46524,
  86003,
  46524,
  14374,
  17013,
  53868,
  38527,
  43209,
  26094,
  92652,
  65845,
  94552,
  28659,
  38527,
  99640,
  69184,
  87482,
  96563,
  86262,
  24993,
  81577,
  20846,
  74846,
  23052,
  28895,
  99506,
  98713,
  71449,
  21219,
  77228,
  81917,
  10891,
  25857,
  87001,
  91997,
  23052,
  53868,
  74256,
  38385,
  94238,
  28551,
  43632,
  41212,
  31605,
  36279,
  97794,
  62790,
  12494,
  70171,
  77510,
  65845,
  63372,
  54077,
  88515,
  15109,
  40326,
  65845,
  22914,
  60686,
  62726,
  86262,
  70119,
  79593,
  53868,
  94563,
  54859,
  51640,
  28551,
  65845,
  69184,
  65461,
  61664,
  41212,
  25984,
  61666,
  70800,
  46524,
  41212,
  43501,
  61231,
  83332,
  36115,
  66078,
  21182,
  69184,
  61664,
  53868,
  74204,
  65306,
  74130,
  20837,
  75914,
  28551,
  21219,
  29036,
  54142,
  23052,
  53868,
  10501,
  90926,
  14154,
  46524,
  52299,
  87705,
  79654,
  47669,
  12959,
  88665,
  81917,
  76365,
  41550,
  81729,
  89137,
  69184,
  70782,
  14154,
  85179,
  22056,
  11773,
  71749,
  90224,
  31605,
  12959,
  86650,
  35258,
  46653,
  21219,
  58379,
  55716,
  51133,
  60031,
  44416,
  86772,
  81071,
  86262,
  41319,
  32695,
  31605,
  99276,
  61404,
  14154,
  89525,
  54678,
  12959,
  52069,
  21732,
  72444,
  16956,
  39897,
  46524,
  20361,
  41798,
  65845,
  78248,
  46524,
  38527,
  96563,
  47367,
  16437,
  28551,
  86415,
  12305,
  84334,
  46524,
  38527,
  20743,
  55605,
  12959,
  29126,
  35259,
  74690,
  54077,
  67905,
  55806,
  46524,
  96563,
  74103,
  95632,
  95757,
  65149,
  21592
]

const result = getTotalDistancebetweenListItems(firstList, secondList);

console.log(result);
