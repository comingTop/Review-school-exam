import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2022_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A figura ilustra esquematicamente um processo de
remediação de solos contaminados com tricloroeteno
(TCE), um agente desengraxante. Em razão de
vazamentos de tanques de estocagem ou de manejo
inapropriado de resíduos industriais, ele se encontra
presente em águas subterrâneas, nas quais forma
uma fase líquida densa não aquosa (DNAPL) que se
deposita no fundo do aquífero. Essa tecnologia de
descontaminação emprega o íon persulfato (S₂O₈²⁻), que
é convertido no radical •SO₄⁻ por minerais que contêm
Fe(III). O esquema representa de forma simplificada o
mecanismo de ação química sobre o TCE e a formação
dos produtos de degradação.
MONITORAMENTO

DNAPL SOLUBILIZAÇÃO ÁGUA SUBTERRÂNEA BERTAGI, L. T.; BASÍLIO,
A. O.; PERALTA-ZAMORA, P. Aplicações ambientais de persulfato:
remediação de águas subterrâneas e solos contaminados. Química
Nova , n. 9, 2021 (adaptado). Esse procedimento de remediação
de águas subterrâneas baseia-se em reações de`,
    images: ['/enem/2022/images/enem_2022_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `oxirredução.` },
      { id: 'B', type: 'text', value: `substituição.` },
      { id: 'C', type: 'text', value: `precipitação.` },
      { id: 'D', type: 'text', value: `desidratação.` },
      { id: 'E', type: 'text', value: `neutralização.` },
    ],
    correct: 'A',
    explanation: `A técnica converte o íon persulfato (S₂O₈²⁻) no radical •SO₄⁻ por meio de minerais contendo Fe(III), e esse radical ataca o tricloroeteno (TCE), fragmentando-o em produtos de degradação. Nesse processo há transferência de elétrons: o enxofre do persulfato ganha elétrons (é reduzido ao formar o radical sulfato) enquanto o carbono do TCE é oxidado durante sua degradação. Reações com variação de número de oxidação, envolvendo um agente redutor e um agente oxidante, são reações de oxirredução. Não há troca de ligantes (substituição), formação de sólido insuficientemente solúvel (precipitação), perda de água (desidratação) nem reação ácido-base (neutralização). Logo, a remediação se baseia em oxirredução (alternativa A).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `De acordo com a Organização Mundial da Saúde, 
a filariose e a leishmaniose são consideradas doenças 
tropicais infecciosas e constituem uma preocupação para 
a saúde pública por ser alto o índice de mortalidade a 
elas associado. 
Uma medida profilática comum a essas duas doenças é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `incineração do lixo orgânico.` },
      { id: 'B', type: 'text', value: `construção de rede de esgoto.` },
      { id: 'C', type: 'text', value: `uso de vermífugo pela população.` },
      { id: 'D', type: 'text', value: `controle das populações dos vetores.` },
      { id: 'E', type: 'text', value: `consumo de carnes vermelhas bem cozidas.` },
    ],
    correct: 'D',
    explanation: `A filariose é transmitida por mosquitos do gênero Culex e a leishmaniose pelo flebotomíneo (mosquito-palha); ambas são doenças infecciosas de transmissão vetorial. Como o agente etiológico (vermes e protozoários) chega ao ser humano pela picada de insetos vetores, a interrupção do ciclo passa pelo combate a esses transmissores. A medida profilática comum às duas doenças é, portanto, o controle das populações dos vetores, com uso de inseticidas, telas e eliminação de criadouros. Incineração de lixo, rede de esgoto, vermífugos e cozimento de carnes atuam sobre outras vias de transmissão, não sobre o vetor alado comum às duas. A resposta é a alternativa D.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em 2017, foi inaugurado, no estado da Bahia, o 
Parque Solar Lapa, composto por duas usinas (Bom Jesus 
da Lapa e Lapa) e capaz de gerar cerca de 300 GWh de 
energia por ano. Considere que cada usina apresente 
potência igual a 75 MW, com o parque totalizando uma 
potência instalada de 150 MW. Considere ainda que a 
irradiância solar média é de 1 500 W 
m² e que a eficiência 
dos painéis é de 20%. 
Parque Solar Lapa entra em operação . Disponível em: www.canalbioenergia.com.br. 
Acesso em: 9 jun. 2022 (adaptado). 
Nessas condições, a área total dos painéis solares que 
compõem o Parque Solar Lapa é mais próxima de:`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 000 000 m²` },
      { id: 'B', type: 'text', value: `500 000 m²` },
      { id: 'C', type: 'text', value: `250 000 m²` },
      { id: 'D', type: 'text', value: `100 000 m²` },
      { id: 'E', type: 'text', value: `20 000 m²` },
    ],
    correct: 'B',
    explanation: `A potência elétrica instalada do parque é P = 150 MW = 1,5 × 10⁸ W, obtida a partir da radiação solar com eficiência de 20%. A potência solar incidente necessária é P_inc = P / η = 1,5 × 10⁸ / 0,20 = 7,5 × 10⁸ W. Como a irradiância é I = 1 500 W/m², a área dos painéis vale A = P_inc / I = 7,5 × 10⁸ / 1 500 = 5 × 10⁵ m². Portanto a área total é de aproximadamente 500 000 m² (o dado de 300 GWh/ano é apenas distrator). A resposta é a alternativa B.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Os riscos apresentados pelos produtos dependem de suas
propriedades e da reatividade quando em contato com outras
substâncias. Para prevenir os riscos devido à natureza química
dos produtos, devemos conhecer a lista de substâncias
incompatíveis e de uso cotidiano em fábricas, hospitais e
laboratórios, a fim de observar cuidados na estocagem,
manipulação e descarte. O quadro elenca algumas dessas
incompatibilidades, que podem levar à ocorrência de acidentes.
Substância Incompatibilidade Riscos associados Reação
enérgica, explosão, produção de oxidante forte e produto
tóxico Ácidos minerais fortes concentrados Bases fortes
Cianetos Hipoclorito de sódio Ácido nítrico concentrado
Matéria orgânica Reação enérgica, explosão e produto tóxico
Considere que houve o descarte indevido de dois conjuntos de
substâncias: (1) ácido clorídrico concentrado com cianeto de
potássio; (2) ácido nítrico concentrado com sacarose.
Disponível em: www.fiocruz.br. Acesso em: 6 dez. 2017
(adaptado). O descarte dos conjuntos (1) e (2) resultará,
respectivamente, em`,
    images: ['/enem/2022/images/enem_2022_d2_q94.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `liberação de gás tóxico e reação oxidativa forte.` },
      { id: 'B', type: 'text', value: `reação oxidativa forte e liberação de gás tóxico.` },
      { id: 'C', type: 'text', value: `formação de sais tóxicos e reação oxidativa forte.` },
      { id: 'D', type: 'text', value: `liberação de gás tóxico e liberação de gás oxidante.` },
      { id: 'E', type: 'text', value: `formação de sais tóxicos e liberação de gás oxidante.` },
    ],
    correct: 'A',
    explanation: `No conjunto (1), ácido clorídrico concentrado (ácido mineral forte) reage com o cianeto de potássio liberando cianeto de hidrogênio (HCl + KCN → KCl + HCN), um gás extremamente tóxico. No conjunto (2), o ácido nítrico concentrado é um oxidante forte e, em contato com matéria orgânica como a sacarose, promove uma reação oxidativa enérgica (oxidação violenta do açúcar). Assim, os descartes resultam, respectivamente, em liberação de gás tóxico (HCN) e reação oxidativa forte. Isso corresponde à alternativa A.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O físico Hans C. Oersted observou que um fio transportando
corrente elétrica produz um campo magnético. A presença do
campo magnético foi verificada ao aproximar uma bússola de um
fio conduzindo corrente elétrica. A figura ilustra um fio
percorrido por uma corrente elétrica i , constante e com
sentido para cima. Os pontos A , B e C estão num plano
transversal e equidistantes do fio. Em cada ponto foi colocada
uma bússola. i A B C Considerando apenas o campo magnético por
causa da corrente i , as respectivas configurações das
bússolas nos pontos A , B e C serão i`,
    images: ['/enem/2022/images/enem_2022_d2_q95.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q95_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q95_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q95_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q95_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q95_E.jpg` },
    ],
    correct: 'D',
    explanation: `Pela regra da mão direita, uma corrente que sobe pelo fio gera linhas de campo magnético circulares e concêntricas em torno do condutor, contidas no plano transversal. Em cada ponto a agulha da bússola se alinha tangente a essa circunferência, de modo que o campo tem sentidos opostos de lados opostos do fio. Como A, B e C estão em posições diferentes ao redor do fio (e equidistantes), suas agulhas apontam em direções distintas, girando conforme a tangente ao círculo de campo em cada local. A configuração que representa corretamente essas orientações tangenciais e invertidas é a da alternativa D.`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O quadro mostra valores de corrente elétrica e seus efeitos
sobre o corpo humano. A corrente elétrica que percorrerá o
corpo de um indivíduo depende da tensão aplicada e da
resistência elétrica média do corpo humano. Esse último fator
está intimamente relacionado com a umidade da pele, que seca
apresenta resistência elétrica da ordem de 500 kΩ, mas, se
molhada, pode chegar a apenas 1 kΩ. Apesar de incomum, é
possível sofrer um acidente utilizando baterias de 12 V.
Considere que um indivíduo com a pele molhada sofreu uma
parada respiratória ao tocar simultaneamente nos pontos A e B
de uma associação de duas dessas baterias. DURAN, J. E. R.
Biofísica: fundamentos e aplicações . São Paulo: Pearson
Prentice Hall, 2003 (adaptado). Qual associação de baterias
foi responsável pelo acidente? A - + A B - + B - +`,
    images: ['/enem/2022/images/enem_2022_d2_q96.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q96_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q96_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q96_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q96_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q96_E.jpg` },
    ],
    correct: 'A',
    explanation: `Com a pele molhada a resistência do corpo cai para cerca de 1 kΩ, e o acidente exige uma tensão suficiente para produzir corrente perigosa. Duas baterias de 12 V associadas em série fornecem 24 V entre os pontos A e B, resultando em corrente I = U/R = 24 / 1000 = 0,024 A = 24 mA, valor capaz de provocar parada respiratória. Já uma associação em paralelo manteria apenas 12 V (12 mA), insuficiente para o efeito descrito. Portanto o acidente só se explica pela associação em série que dobra a tensão. A resposta é a alternativa A.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O urânio é empregado como fonte de energia em 
reatores nucleares. Para tanto, o seu mineral deve 
ser refinado, convertido a hexafluoreto de urânio e 
posteriormente enriquecido, para aumentar de 0,7% a 3% 
a abundância de um isótopo específico - o urânio-235. 
Uma das formas de enriquecimento utiliza a pequena 
diferença de massa entre os hexafluoretos de urânio-235 e 
de urânio-238 para separá-los por efusão, precedida pela 
vaporização. Esses vapores devem efundir repetidamente 
milhares de vezes através de barreiras porosas formadas por 
telas com grande número de pequenos orifícios. No entanto, 
devido à complexidade e à grande quantidade de energia 
envolvida, cientistas e engenheiros continuam a pesquisar 
procedimentos alternativos de enriquecimento. 
ATKINS, P.; JONES, L. Princípios de química : questionando a vida moderna e 
o meio ambiente. Porto Alegre: Bookman, 2006 (adaptado). 
Considerando a diferença de massa mencionada entre os 
dois isótopos, que tipo de procedimento alternativo ao da 
efusão pode ser empregado para tal finalidade?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Peneiração.` },
      { id: 'B', type: 'text', value: `Centrifugação.` },
      { id: 'C', type: 'text', value: `Extração por solvente.` },
      { id: 'D', type: 'text', value: `Destilação fracionada.` },
      { id: 'E', type: 'text', value: `Separação magnética.` },
    ],
    correct: 'B',
    explanation: `A separação explora a pequena diferença de massa entre os hexafluoretos de ²³⁵U e ²³⁸U na fase gasosa. Qualquer método alternativo à efusão deve se basear nessa diferença de massa das moléculas gasosas. A centrifugação gasosa faz exatamente isso: ao girar o gás em alta velocidade, as moléculas mais pesadas (²³⁸UF₆) concentram-se junto à parede e as mais leves (²³⁵UF₆) ficam mais próximas do eixo, permitindo a separação. Peneiração e separação magnética não discriminam por massa molecular, destilação fracionada exploraria diferença de ponto de ebulição (praticamente idêntico nos isótopos) e a extração por solvente depende de solubilidade. O procedimento adequado é a centrifugação (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A Agência Nacional de Vigilância Sanitária (Anvisa) 
aprovou um produto de terapia gênica no país, indicado 
para o tratamento da distrofia hereditária da retina. O 
procedimento é recomendado para crianças acima de 
12 meses e adultos com perda de visão causada pela 
mutação do gene humano RPE65. O produto, elaborado 
por engenharia genética, é composto por um vírus, no qual 
foi inserida uma cópia do gene normal humano RPE65 
para corrigir o funcionamento das células da retina. 
ANVISA. Disponível em: www.gov.br/anvisa. Acesso em: 4 dez. 2021 (adaptado). 
O sucesso dessa terapia advém do fato de que o produto 
favorecerá a`,
    alternatives: [
      { id: 'A', type: 'text', value: `correção do código genético para a tradução da proteína.` },
      { id: 'B', type: 'text', value: `alteração do RNA ribossômico ligado à síntese da proteína.` },
      { id: 'C', type: 'text', value: `produção de mutações benéficas para a correção do problema.` },
      { id: 'D', type: 'text', value: `liberação imediata da proteína normal na região ocular humana.` },
      { id: 'E', type: 'text', value: `expressão do gene responsável pela produção da enzima normal.` },
    ],
    correct: 'E',
    explanation: `A distrofia decorre da mutação do gene RPE65, que impede a produção da enzima funcional nas células da retina. A terapia introduz, por meio de um vírus vetor, uma cópia normal (selvagem) do gene RPE65 no interior dessas células. Com o gene íntegro presente, a maquinaria celular passa a transcrevê-lo e traduzi-lo, ou seja, a expressá-lo, produzindo a enzima normal que restaura o funcionamento da retina. Não há correção do código genético universal, alteração do RNA ribossômico, indução de mutações benéficas nem entrega direta da proteína pronta. O sucesso vem da expressão do gene responsável pela produção da enzima normal (alternativa E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A extinção de espécies é uma ameaça real que 
afeta diversas regiões do país. A introdução de espécies 
exóticas pode ser considerada um fator maximizador 
desse processo. A jaqueira ( Artocarpus heterophyllus ) , 
por exemplo, é uma árvore originária da Índia e de 
regiões do Sudeste Asiático que foi introduzida ainda na 
era colonial e se aclimatou muito bem em praticamente 
todo o território nacional. 
Casos como o dessa árvore podem provocar a redução 
da biodiversidade, pois elas`,
    alternatives: [
      { id: 'A', type: 'text', value: `ocupam áreas de vegetação nativa e substituem parcialmente a flora original.` },
      { id: 'B', type: 'text', value: `estimulam a competição por seus frutos entre animais típicos da região e eliminam as espécies perdedoras.` },
      { id: 'C', type: 'text', value: `alteram os nichos e aumentam o número de possibilidades de relações entre os seres vivos daquele ambiente.` },
      { id: 'D', type: 'text', value: `apresentam alta taxa de reprodução e se mantêm com um número de indivíduos superior à capacidade suporte do ambiente.` },
      { id: 'E', type: 'text', value: `diminuem a relação de competição entre os polinizadores e facilitam a ação de dispersores de sementes de espécies nativas.` },
    ],
    correct: 'A',
    explanation: `A jaqueira é uma espécie exótica invasora que se aclimatou bem em todo o território. Ao se estabelecer, ela ocupa o espaço físico e os recursos das áreas de vegetação nativa, competindo com e substituindo parcialmente as plantas originais. Essa substituição reduz a diversidade da flora nativa e, por consequência, a biodiversidade local. As demais alternativas sugerem efeitos que aumentariam relações ecológicas ou favoreceriam nativas, o que é contrário ao impacto empobrecedor de uma invasora. A redução da biodiversidade ocorre porque elas ocupam áreas nativas e substituem parcialmente a flora original (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em um dia de calor intenso, dois colegas estão 
a brincar com a água da mangueira. Um deles quer 
saber até que altura o jato de água alcança, a partir da 
saída de água, quando a mangueira está posicionada 
totalmente na direção vertical. O outro colega propõe 
então o seguinte experimento: eles posicionarem a saída 
de água da mangueira na direção horizontal, a 1 m de 
altura em relação ao chão, e então medirem a distância 
horizontal entre a mangueira e o local onde a água 
atinge o chão. A medida dessa distância foi de 3 m, 
e a partir disso eles calcularam o alcance vertical do 
jato de água. Considere a aceleração da gravidade de
10 m/s².
O resultado que eles obtiveram foi de`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,50 m.` },
      { id: 'B', type: 'text', value: `2,25 m.` },
      { id: 'C', type: 'text', value: `4,00 m.` },
      { id: 'D', type: 'text', value: `4,50 m.` },
      { id: 'E', type: 'text', value: `5,00 m.` },
    ],
    correct: 'B',
    explanation: `Com a mangueira horizontal a 1 m de altura, o tempo de queda é dado por h = (g/2)t², logo 1 = 5t² e t = √0,2 ≈ 0,45 s. A velocidade de saída da água é v = alcance horizontal / t = 3 / 0,45 ≈ 6,7 m/s (de fato v² = 45 m²/s²). Posicionando a mesma mangueira na vertical, a água sobe até a altura em que toda a energia cinética vira potencial: H = v² / (2g) = 45 / 20 = 2,25 m. Portanto o alcance vertical calculado é 2,25 m (alternativa B).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O etanol é um combustível produzido a partir da 
fermentação da sacarose presente no caldo de cana- 
-de-açúcar. Um dos fatores que afeta a produção desse 
álcool é o grau de deterioração da sacarose, que se inicia 
após o corte, por causa da ação de microrganismos. Foram 
analisadas cinco amostras de diferentes tipos de cana-de- 
-açúcar e cada uma recebeu um código de identificação. 
No quadro são apresentados os dados de concentração de 
sacarose e de microrganismos presentes nessas amostras. 
 
Pretende-se escolher o tipo de cana-de-açúcar que 
conterá o maior teor de sacarose 10 horas após o corte 
e que, consequentemente, produzirá a maior quantidade 
de etanol por fermentação. Considere que existe uma 
redução de aproximadamente 50% da concentração 
de sacarose nesse tempo, para cada 1,0 mg L⁻¹ de 
microrganismos presentes na cana-de-açúcar. 
Disponível em: www.inovação.unicamp.br. Acesso em: 11 ago. 2012 (adaptado). 
Qual tipo de cana-de-açúcar deve ser escolhido?`,
    images: ['/enem/2022/images/enem_2022_d2_q101.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `RB72` },
      { id: 'B', type: 'text', value: `RB84` },
      { id: 'C', type: 'text', value: `RB92` },
      { id: 'D', type: 'text', value: `SP79` },
      { id: 'E', type: 'text', value: `SP80` },
    ],
    correct: 'C',
    explanation: `Deve-se escolher a cana com o maior teor de sacarose após 10 h, considerando redução de 50% da sacarose para cada 1,0 mg/L de microrganismos. A sacarose remanescente é S_final = S_inicial × (1 − 0,5 × c_microrganismos). Calculando: RB72 = 13,0×(1−0,35) = 8,45; RB84 = 18,0×(1−0,40) = 10,8; RB92 = 16,0×(1−0,30) = 11,2; SP79 = 14,0×(1−0,25) = 10,5; SP80 = 17,0×(1−0,45) = 9,35 g/L. O maior valor é o da RB92 (11,2 g/L), que garantirá a maior produção de etanol. A resposta é a alternativa C.`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Entre as diversas técnicas para diagnóstico da 
covid-19, destaca-se o teste genético. Considerando as 
diferentes variantes e cargas virais, um exemplo é a PCR, 
reação efetuada por uma enzima do tipo polimerase. 
Essa técnica permite identificar, com confiabilidade, o 
material genético do SARS-CoV-2, um vírus de RNA. 
Para comprovação da infecção por esse coronavírus, são 
coletadas amostras de secreções do indivíduo. Uma etapa 
que antecede a reação de PCR precisa ser realizada para 
permitir a amplificação do material genético do vírus. 
Essa etapa deve ser realizada para`,
    alternatives: [
      { id: 'A', type: 'text', value: `concentrar o RNA viral para otimizar a técnica.` },
      { id: 'B', type: 'text', value: `identificar nas amostras anticorpos anti-SARS-CoV-2.` },
      { id: 'C', type: 'text', value: `proliferar o vírus em culturas, aumentando a carga viral.` },
      { id: 'D', type: 'text', value: `purificar ácidos nucleicos virais, facilitando a ação da enzima.` },
      { id: 'E', type: 'text', value: `obter moléculas de cDNA viral por meio da transcrição reversa.` },
    ],
    correct: 'E',
    explanation: `O SARS-CoV-2 é um vírus de RNA, mas a PCR utiliza uma DNA-polimerase que só amplifica moléculas de DNA. Por isso, antes da PCR é necessária uma etapa de transcrição reversa, na qual a enzima transcriptase reversa sintetiza DNA complementar (cDNA) a partir do RNA viral. Esse cDNA é então a molécula-molde que a polimerase pode amplificar na reação em cadeia. As alternativas sobre concentrar RNA, detectar anticorpos ou cultivar o vírus não habilitam a amplificação por PCR. A etapa prévia é obter moléculas de cDNA viral por transcrição reversa (alternativa E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Tribologia é o estudo da interação entre duas superfícies em contato, como desgaste e atrito, sendo de extrema importância na avaliação de diferentes produtos e de bens de consumo em geral. Para testar a conformidade de uma muleta, realiza-se um ensaio tribológico, pressionando-a verticalmente contra o piso com uma força F, conforme ilustra a imagem, em que CM representa o centro de massa da muleta.
Mantendo-se a força F paralela à muleta, varia-se lentamente o ângulo entre a muleta e a vertical, até o máximo ângulo imediatamente anterior ao de escorregamento, denominado ângulo crítico. Esse ângulo também pode ser calculado a partir da identificação dos pontos de aplicação, da direção e do sentido das forças peso (P), normal (N) e de atrito estático (fe).
O esquema que representa corretamente todas as forças que atuam sobre a muleta quando ela atinge o ângulo crítico é:`,
    images: ['/enem/2022/images/enem_2022_d2_q103.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q103_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q103_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q103_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q103_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q103_E.jpg` },
    ],
    correct: 'E',
    explanation: `No ângulo crítico atuam sobre a muleta quatro forças: a força F aplicada paralela ao eixo da muleta, o peso P vertical para baixo no centro de massa, a normal N e o atrito estático fₑ, ambos no ponto de contato com o piso. A normal é sempre perpendicular à superfície do chão, portanto vertical e para cima, e o atrito estático é horizontal, no sentido que se opõe ao escorregamento iminente do apoio. O diagrama correto mostra P aplicado no CM, N vertical para cima e fₑ horizontal, ambos no ponto de apoio, com F ao longo da muleta. Essa representação consistente das direções e dos pontos de aplicação corresponde à alternativa E.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Diversas substâncias são empregadas com a intenção 
de incrementar o desempenho esportivo de atletas de 
alto nível. O chamado doping sanguíneo, por exemplo, 
pela utilização da eritropoietina, é proibido pelas principais 
federações de esportes no mundo. A eritropoietina é um 
hormônio produzido pelos rins e fígado e sua principal ação 
é regular o processo de eritropoiese. Seu uso administrado 
intravenosamente em quantidades superiores àquelas 
presentes naturalmente no organismo permite que o 
indivíduo aumente a sua capacidade de realização de 
exercícios físicos. 
Esse tipo de doping está diretamente relacionado ao 
aumento da`,
    alternatives: [
      { id: 'A', type: 'text', value: `frequência cardíaca.` },
      { id: 'B', type: 'text', value: `capacidade pulmonar.` },
      { id: 'C', type: 'text', value: `massa muscular do indivíduo.` },
      { id: 'D', type: 'text', value: `atividade anaeróbica da musculatura.` },
      { id: 'E', type: 'text', value: `taxa de transporte de oxigênio pelo sangue.` },
    ],
    correct: 'E',
    explanation: `A eritropoietina (EPO) regula a eritropoiese, ou seja, estimula a produção de hemácias (eritrócitos) na medula óssea. Administrada em excesso, aumenta a quantidade de hemácias circulantes e, consequentemente, a concentração de hemoglobina no sangue. Como a hemoglobina é a molécula transportadora de oxigênio, o doping sanguíneo eleva a capacidade de transporte de O₂ aos músculos, melhorando o desempenho aeróbico. O efeito não está ligado diretamente a frequência cardíaca, capacidade pulmonar, massa muscular ou metabolismo anaeróbico. O aumento é o da taxa de transporte de oxigênio pelo sangue (alternativa E).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em um autódromo, os carros podem derrapar em 
uma curva e bater na parede de proteção. Para diminuir 
o impacto de uma batida, pode-se colocar na parede 
uma barreira de pneus, isso faz com que a colisão 
seja mais demorada e o carro retorne com velocidade 
reduzida. Outra opção é colocar uma barreira de blocos 
de um material que se deforma, tornando-a tão demorada 
quanto a colisão com os pneus, mas que não permite a 
volta do carro após a colisão. 
Comparando as duas situações, como ficam a força média
exercida sobre o carro e a energia mecânica dissipada?`,
    alternatives: [
      { id: 'A', type: 'text', value: `A força é maior na colisão com a barreira de pneus, e a energia dissipada é maior na colisão com a barreira de blocos.` },
      { id: 'B', type: 'text', value: `A força é maior na colisão com a barreira de blocos, e a energia dissipada é maior na colisão com a barreira de pneus.` },
      { id: 'C', type: 'text', value: `A força é maior na colisão com a barreira de blocos, e a energia dissipada é a mesma nas duas situações.` },
      { id: 'D', type: 'text', value: `A força é maior na colisão com a barreira de pneus, e a energia dissipada é maior na colisão com a barreira de pneus.` },
      { id: 'E', type: 'text', value: `A força é maior na colisão com a barreira de blocos, e a energia dissipada é maior na colisão com a barreira de blocos.` },
    ],
    correct: 'A',
    explanation: `Nos dois casos a colisão tem a mesma duração (os blocos são escolhidos para serem tão demorados quanto os pneus). Na barreira de pneus o carro retorna com velocidade, então a variação de quantidade de movimento é maior (de +v a −v'), exigindo maior impulso e, para o mesmo tempo, maior força média. Na barreira de blocos o carro para (não retorna), logo a variação de momento é menor e a força média é menor. Quanto à energia: nos blocos o carro perde praticamente toda a energia cinética (não volta), dissipando mais; nos pneus parte da energia retorna com o carro, dissipando menos. Assim, a força é maior na colisão com os pneus e a energia dissipada é maior na colisão com os blocos (alternativa A).`,
    subject: ['fis'],
    topics: ['Impulso e quantidade de movimento', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A penicilamina é um medicamento de uso oral
utilizado no tratamento de várias doenças. Esse
composto é excretado na urina, cujo pH se situa entre
5 e 7. A penicilamina, cuja fórmula estrutural plana está
apresentada, possui três grupos funcionais que podem
ser ionizados:
• carboxila: -COOH, cujo pKa é igual a 1,8;
• amino: -NH₂, que pode ser convertido em
amínio (-NH₃⁺, cujo pKa é igual a 7,9);
• tiol: -SH, cujo pKa é igual a 10,5.
Sabe-se que pKa = −log Ka.
Qual estrutura derivada da penicilamina é
predominantemente encontrada na urina?`,
    images: ['/enem/2022/images/enem_2022_d2_q106_stem.png'],
    alternatives: [
      { id: 'A', type: 'image', value: '/enem/2022/images/enem_2022_d2_q106_A.png' },
      { id: 'B', type: 'image', value: '/enem/2022/images/enem_2022_d2_q106_B.png' },
      { id: 'C', type: 'image', value: '/enem/2022/images/enem_2022_d2_q106_C.png' },
      { id: 'D', type: 'image', value: '/enem/2022/images/enem_2022_d2_q106_D.png' },
      { id: 'E', type: 'image', value: '/enem/2022/images/enem_2022_d2_q106_E.png' },
    ],
    correct: 'C',
    explanation: `Na urina (pH entre 5 e 7) cada grupo se encontra na forma predominante conforme seu pKa comparado ao pH. A carboxila (pKa 1,8) está bem abaixo do pH, logo desprotonada na forma −COO⁻. O grupo amínio (pKa 7,9) está acima do pH, então predomina protonado como −NH₃⁺. O tiol (pKa 10,5) também está acima do pH, permanecendo protonado como −SH. A estrutura predominante é, portanto, HS–...–COO⁻ com o nitrogênio como −NH₃⁺, que corresponde à alternativa C.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A biomassa celulósica pode ser utilizada para a produção de
etanol de segunda geração. Entretanto, é necessário que os
polissacarídeos sejam convertidos em mono e dissacarídeos,
processo que pode ser conduzido em meio ácido, conforme mostra
o esquema: H + OH OH O H O OH O H O O OH OH O H O + O OH O H O
O O H O + OH O H H O H OH O H O OH O H O + O H OGEDA, T. L.;
PETRI, D. F. S. [...] Química Nova , n. 7, 2010 (adaptado).
Nessa conversão de polissacarídeos, a função do íon H + é`,
    images: ['/enem/2022/images/enem_2022_d2_q107.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `dissolver os reagentes.` },
      { id: 'B', type: 'text', value: `deslocar o equilíbrio químico.` },
      { id: 'C', type: 'text', value: `aumentar a velocidade da reação.` },
      { id: 'D', type: 'text', value: `mudar a constante de equilíbrio da reação.` },
      { id: 'E', type: 'text', value: `formar ligações de hidrogênio com o polissacarídeo.` },
    ],
    correct: 'C',
    explanation: `O íon H⁺ aparece como reagente no início do mecanismo (protona o oxigênio glicosídico) e é regenerado ao final da conversão, exatamente a assinatura de um catalisador. Catalisadores fornecem um caminho reacional de menor energia de ativação, acelerando a hidrólise dos polissacarídeos em mono e dissacarídeos, sem serem consumidos. Por não ser consumido e não alterar reagentes ou produtos finais, o H⁺ não desloca equilíbrio nem muda a constante de equilíbrio. Sua função é aumentar a velocidade da reação (alternativa C).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O ácido tartárico é o principal ácido do vinho e está
diretamente relacionado com sua qualidade. Na avaliação de um
vinho branco em produção, uma analista neutralizou uma
alíquota de 25,0 mL do vinho com NaOH a 0,10 mol L⁻¹ ,
consumindo um volume igual a 8,0 mL dessa base. A reação para
esse processo de titulação é representada pela equação
química: O OH  2 NaOH  2 H₂ O OH O H O OH Ácido tartárico
(massa molar: 150 g mol  1 ) A concentração de ácido
tartárico no vinho analisado é mais próxima de:`,
    images: ['/enem/2022/images/enem_2022_d2_q108.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,8 g L⁻¹` },
      { id: 'B', type: 'text', value: `2,4 g L⁻¹` },
      { id: 'C', type: 'text', value: `3,6 g L⁻¹` },
      { id: 'D', type: 'text', value: `4,8 g L⁻¹` },
      { id: 'E', type: 'text', value: `9,6 g L⁻¹` },
    ],
    correct: 'B',
    explanation: `Na titulação, n(NaOH) = C × V = 0,10 mol/L × 0,0080 L = 8,0 × 10⁻⁴ mol. Como a estequiometria é 1 ácido tartárico : 2 NaOH, n(ácido) = 8,0 × 10⁻⁴ / 2 = 4,0 × 10⁻⁴ mol na alíquota de 25,0 mL. A massa de ácido é m = n × M = 4,0 × 10⁻⁴ × 150 = 0,060 g. A concentração é C = m / V = 0,060 g / 0,025 L = 2,4 g/L, próxima da alternativa B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O elemento iodo (I) tem função biológica e é acumulado 
na tireoide. Nos acidentes nucleares de Chernobyl e 
Fukushima, ocorreu a liberação para a atmosfera do 
radioisótopo 
131 I, responsável por enfermidades nas 
pessoas que foram expostas a ele. O decaimento de uma 
massa de 12 microgramas do isótopo 131 I foi monitorado 
por 14 dias, conforme o quadro. 
 
Após o período de 40 dias, a massa residual desse 
isótopo é mais próxima de`,
    images: ['/enem/2022/images/enem_2022_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,4 µg.` },
      { id: 'B', type: 'text', value: `1,5 µg.` },
      { id: 'C', type: 'text', value: `0,8 µg.` },
      { id: 'D', type: 'text', value: `0,4 µg.` },
      { id: 'E', type: 'text', value: `0,2 µg.` },
    ],
    correct: 'D',
    explanation: `Pelo quadro, a massa cai de 12,0 µg (t = 0) para 6,0 µg (t = 8 dias), revelando meia-vida de 8 dias para o ¹³¹I. Em 40 dias transcorrem 40/8 = 5 meias-vidas. A massa residual é m = 12,0 × (1/2)⁵ = 12,0 / 32 = 0,375 µg. Esse valor é mais próximo de 0,4 µg, correspondendo à alternativa D.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Desde a proposição da teoria de seleção natural 
por Darwin, os seres vivos nunca mais foram olhados 
da mesma forma. No que diz respeito à reprodução de 
anfíbios anuros, os cientistas já descreveram diferentes 
padrões reprodutivos, como os exemplificados a seguir: 
Espécie 1 - As fêmeas produzem cerca de 
5 000 gametas, que são fecundados na água, em 
lagoas temporárias de estação chuvosa. Todo o 
desenvolvimento embrionário, do ovo à metamorfose, 
ocorre, nesse ambiente, independente dos pais. 
Espécie 2 - As fêmeas produzem aproximadamente 
200 gametas, que são depositados em poças próximas a 
corpos-d’água. Os embriões são vigiados pelos machos 
durante boa parte do seu desenvolvimento. 
Espécie 3 - As fêmeas produzem por volta de 
20 gametas, que são fecundados sobre a superfície das 
folhas de plantas cujos galhos estão dispostos acima da 
superfície de corpos-d’água e aí se desenvolvem até 
a eclosão. 
Espécie 4 - As fêmeas produzem poucos gametas 
que, quando fecundados, são “abocanhados” pelos 
machos. Os embriões se desenvolvem no interior do 
saco vocal do macho até a metamorfose, quando saem 
através da boca do pai. 
Os padrões descritos evidenciam que`,
    alternatives: [
      { id: 'A', type: 'text', value: `as fêmeas influenciam o comportamento dos machos.` },
      { id: 'B', type: 'text', value: `o cuidado parental é necessário para o desenvolvimento.` },
      { id: 'C', type: 'text', value: `o grau de evolução determina o comportamento reprodutivo.` },
      { id: 'D', type: 'text', value: `o sucesso reprodutivo pode ser garantido por estratégias diferentes.` },
      { id: 'E', type: 'text', value: `o ambiente induz modificação na produção do número de gametas femininos.` },
    ],
    correct: 'D',
    explanation: `As quatro espécies de anuros produzem números muito diferentes de gametas e adotam cuidados parentais distintos (desde total abandono com milhares de ovos até poucos ovos protegidos no saco vocal do macho). Apesar das enormes diferenças, todas as estratégias persistem na natureza, o que indica que cada uma é eficaz na perpetuação da espécie em seu contexto. Ou seja, não existe uma única forma correta: o sucesso reprodutivo pode ser alcançado por estratégias variadas moldadas pela seleção natural. As demais alternativas generalizam indevidamente (grau de evolução, necessidade obrigatória de cuidado, etc.). A resposta é a alternativa D.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O eixo de rotação da Terra apresenta uma inclinação em relação
ao plano de sua órbita em torno do Sol, interferindo na
duração do dia e da noite ao longo do ano. Polo Norte Trópico
de Câncer Círculo Polar Ártico Equador DIA NOITE Incidência
direta ao meio-dia Trópico de Capricórnio Círculo Polar
Antártico Polo Sul Terra em 21 de dezembro Uma pessoa instala
em sua residência uma placa fotovoltaica, que transforma
energia solar em elétrica. Ela monitora a energia total
produzida por essa placa em 4 dias do ano, ensolarados e sem
nuvens, e lança os resultados no gráfico. Energia Dia 10/01
10/04 10/07 10/10 Disponível em: www.fisica.ufpr.br. Acesso
em: 27 maio 2022 (adaptado). Próximo a que região se situa a
residência onde as placas foram instaladas?`,
    images: ['/enem/2022/images/enem_2022_d2_q111_1.jpg', '/enem/2022/images/enem_2022_d2_q111_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Trópico de Capricórnio.` },
      { id: 'B', type: 'text', value: `Trópico de Câncer.` },
      { id: 'C', type: 'text', value: `Polo Norte.` },
      { id: 'D', type: 'text', value: `Polo Sul.` },
      { id: 'E', type: 'text', value: `Equador.` },
    ],
    correct: 'A',
    explanation: `O gráfico mostra a maior produção de energia em 10/01 (janeiro) e a menor em 10/07 (julho), com valores intermediários e semelhantes em abril e outubro. Energia solar máxima no verão de janeiro e mínima no inverno de julho caracteriza o Hemisfério Sul, onde em 21 de dezembro o Sol incide perpendicularmente sobre o Trópico de Capricórnio. A nítida variação sazonal exclui as regiões equatoriais (pouca variação) e os polos. Assim, a residência situa-se próxima ao Trópico de Capricórnio (alternativa A).`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um pai faz um balanço utilizando dois segmentos paralelos e
iguais da mesma corda para fixar uma tábua a uma barra
horizontal. Por segurança, opta por um tipo de corda cuja
tensão de ruptura seja 25% superior à tensão máxima calculada
nas seguintes condições: • O ângulo máximo atingido pelo
balanço em relação à vertical é igual a 90°; • Os filhos
utilizarão o balanço até que tenham uma massa de 24 kg. Além
disso, ele aproxima o movimento do balanço para o movimento
circular uniforme, considera que a aceleração da gravidade é
igual a 10 2 m s e despreza forças dissipativas. Qual é a
tensão de ruptura da corda escolhida?`,
    alternatives: [
      { id: 'A', type: 'text', value: `120 N` },
      { id: 'B', type: 'text', value: `300 N` },
      { id: 'C', type: 'text', value: `360 N` },
      { id: 'D', type: 'text', value: `450 N` },
      { id: 'E', type: 'text', value: `900 N` },
    ],
    correct: 'D',
    explanation: `No ponto mais baixo, soltando o balanço da horizontal (90° da vertical), a velocidade satisfaz v² = 2gL, e a tração total obedece a T − P = m v²/L, logo T = mg + m(2gL)/L = 3mg. Com m = 24 kg e g = 10 m/s², T = 3 × 24 × 10 = 720 N, distribuídos igualmente pelos dois segmentos de corda, ou seja 360 N em cada um. A corda deve ter tensão de ruptura 25% superior a essa tração máxima: T_rup = 1,25 × 360 = 450 N. A resposta é a alternativa D.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A nanotecnologia é responsável pelo aprimoramento 
de diversos materiais, incluindo os que são impactados 
com a presença de poluentes e da umidade na atmosfera, 
causadores de corrosão. O processo de corrosão é 
espontâneo e provoca a deterioração de metais como 
o ferro, que, em presença de oxigênio e água, sofre 
oxidação, conforme ilustra a equação química: 
4 Fe (s) + 2 H₂ O (l) + 3 O₂ (g) → 2 Fe₂ O₃ ⋅ H₂ O (s) 
Uma forma de garantir a durabilidade da estrutura 
metálica e a sua resistência à umidade consiste na 
deposição de filmes finos nanocerâmicos à base de 
zircônia (ZrO 2 ) e alumina (Al₂ O₃ ) sobre a superfície do 
objeto que se deseja proteger. 
CLEMENTE, G. A. B. F. et al. O uso de materiais híbridos ou nanocompósitos como 
revestimentos anticorrosivos do aço. Química Nova , n. 9, 2021 (adaptado). 
Essa nanotecnologia aplicada na proteção contra a 
corrosão se baseia no(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `proteção catódica, que utiliza um metal fortemente redutor.` },
      { id: 'B', type: 'text', value: `uso de metais de sacrifício, que se oxidam no lugar do ferro.` },
      { id: 'C', type: 'text', value: `passivação do ferro, que fica revestido pelo seu próprio óxido.` },
      { id: 'D', type: 'text', value: `efeito de barreira, que impede o contato com o agente oxidante.` },
      { id: 'E', type: 'text', value: `galvanização, que usa outros metais de menor potencial de redução.` },
    ],
    correct: 'D',
    explanation: `Os filmes finos nanocerâmicos de zircônia (ZrO₂) e alumina (Al₂O₃) são quimicamente inertes e revestem a superfície do ferro. Eles atuam como uma barreira física que isola o metal do contato com oxigênio e água (os agentes oxidantes), impedindo a reação de corrosão. Não há metal de sacrifício nem proteção catódica (o revestimento não é um metal mais redutor), e não se trata de passivação pelo próprio óxido de ferro nem de galvanização. O mecanismo é o efeito de barreira que impede o contato com o agente oxidante (alternativa D).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `As células da epiderme da folha da Tradescantia 
pallida purpurea , uma herbácea popularmente conhecida 
como trapoeraba-roxa, contém um vacúolo onde se 
encontra um pigmento que dá a coloração arroxeada a 
esse tecido. Em um experimento, um corte da epiderme 
de uma folha da trapoeraba-roxa foi imerso em ambiente 
hipotônico e, logo em seguida, foi colocado em uma 
lâmina e observado em microscópio óptico. 
Durante a observação desse corte, foi possível identificar o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `acúmulo do solvente com fragmentação da organela.` },
      { id: 'B', type: 'text', value: `rompimento da membrana celular com liberação do citosol.` },
      { id: 'C', type: 'text', value: `aumento do vacúolo com diluição do pigmento no seu interior.` },
      { id: 'D', type: 'text', value: `quebra da parede celular com extravasamento do pigmento.` },
      { id: 'E', type: 'text', value: `murchamento da célula com expulsão do pigmento do vacúolo.` },
    ],
    correct: 'C',
    explanation: `Em meio hipotônico, a concentração de soluto é menor fora da célula, de modo que a água entra na célula por osmose. Nas células da epiderme da trapoeraba-roxa, essa água acumula-se principalmente no grande vacúolo, que contém o pigmento. Com o aumento de volume do vacúolo, o pigmento fica diluído em seu interior, o que é observável ao microscópio como atenuação da coloração. Como se trata de célula vegetal, a parede celular impede o rompimento, descartando lise e extravasamento. O que se identifica é o aumento do vacúolo com diluição do pigmento (alternativa C).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A variação da incidência de radiação solar sobre a superfície da Terra resulta em uma variação de temperatura ao longo de um dia denominada amplitude térmica. Edificações e pavimentações realizadas nas áreas urbanas contribuem para alterar as amplitudes térmicas dessas regiões, em comparação com regiões que mantêm suas características naturais, com presença de vegetação e água, já que o calor específico do concreto é inferior ao da água. Assim, parte da avaliação do impacto ambiental que a presença de concreto proporciona às áreas urbanas consiste em considerar a substituição da área concretada por um mesmo volume de água e comparar as variações de temperatura devido à absorção da radiação solar nas duas situações (concretada e alagada). Desprezando os efeitos da evaporação e considerando que toda a radiação é absorvida, essa avaliação pode ser realizada com os seguintes dados:
Densidade (kg/m³): Água 1000, Concreto 2500
Calor específico (J/g.C): Água 4,2, Concreto 0,8
ROMERO, M. A. B. et al. Mudanças climáticas e ilhas de calor urbanas. Brasília: UnB; ETB, 2019 (adaptado).
A razão entre as variações de temperatura nas áreas concretada e alagada é mais próxima de`,
    images: ['/enem/2022/images/enem_2022_d2_q115.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0.` },
      { id: 'B', type: 'text', value: `2,1.` },
      { id: 'C', type: 'text', value: `2,5.` },
      { id: 'D', type: 'text', value: `5,3.` },
      { id: 'E', type: 'text', value: `13,1.` },
    
    ],
    correct: 'B',
    explanation: `Para o mesmo volume V e a mesma radiação absorvida Q, a variação de temperatura é ΔT = Q/(m·c) = Q/(ρ·V·c). A razão entre as áreas concretada e alagada é ΔT_concreto/ΔT_água = (ρ_água·c_água)/(ρ_concreto·c_concreto). Substituindo: (1 000 × 4,2)/(2 500 × 0,8) = 4 200 / 2 000 = 2,1. Ou seja, o concreto aquece cerca de 2,1 vezes mais que a água para a mesma radiação, o que explica as ilhas de calor. A resposta é a alternativa B.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O manual de uma ducha elétrica informa que seus três níveis de aquecimento (morno, quente e superquente) apresentam as seguintes variações de temperatura da água em função de sua Vazão (dados da tabela). Utiliza-se um disjuntor para proteger o circuito dessa ducha contra sobrecargas elétricas em qualquer nível de aquecimento. Por padrão, o disjuntor é especificado pela corrente nominal igual ao múltiplo de 5 A imediatamente superior à corrente máxima do circuito. Considere que a ducha deve ser ligada em 220 V e que toda a energia é dissipada através da resistência do chuveiro e convertida em energia térmica transferida para a água, que apresenta calor específico de 4,2 J/(g.C) e densidade de 1 000 g/L.
O disjuntor adequado para a proteção dessa ducha é especificado por:`,
    images: ['/enem/2022/images/enem_2022_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `60 A` },
      { id: 'B', type: 'text', value: `30 A` },
      { id: 'C', type: 'text', value: `20 A` },
      { id: 'D', type: 'text', value: `10 A` },
      { id: 'E', type: 'text', value: `5 A` },
    
    ],
    correct: 'B',
    explanation: `A potência vale P = (vazão em massa)·c·ΔT, com vazão em massa = vazão(L/min)×1000 g/L ÷ 60 s. Para vazão 3 L/min temos 50 g/s e para 6 L/min, 100 g/s. A maior potência ocorre no nível superquente: 50 g/s × 4,2 J/(g·°C) × 30 °C = 6 300 W (igual a 100 g/s × 4,2 × 15 = 6 300 W). A corrente máxima é I = P/U = 6 300 / 220 ≈ 28,6 A. O disjuntor é o múltiplo de 5 A imediatamente superior, ou seja, 30 A (alternativa B).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um grupo de alunos realizou um experimento para observar
algumas propriedades dos ácidos, adicionando um pedaço de
mármore (CaCO 3 ) a uma solução aquosa de ácido clorídrico
(HCl), observando a liberação de um gás e o aumento da
temperatura. Gás Ácido Mármore O gás obtido no experimento é
o:`,
    images: ['/enem/2022/images/enem_2022_d2_q117.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `H₂` },
      { id: 'B', type: 'text', value: `O₂` },
      { id: 'C', type: 'text', value: `CO₂` },
      { id: 'D', type: 'text', value: `CO` },
      { id: 'E', type: 'text', value: `Cl₂` },
    ],
    correct: 'C',
    explanation: `O mármore é carbonato de cálcio (CaCO₃) e reage com o ácido clorídrico segundo CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂. A efervescência observada é a liberação de gás carbônico (CO₂), e a reação é exotérmica, elevando a temperatura. A reação típica de carbonatos com ácidos sempre produz CO₂, não H₂, O₂, CO ou Cl₂. Portanto, o gás obtido é o CO₂ (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em 2002, foi publicado um artigo científico que relacionava
alterações na produção de hormônios sexuais de sapos machos
expostos à atrazina, um herbicida, com o desenvolvimento
anômalo de seus caracteres sexuais primários e secundários.
Entre os animais sujeitos à contaminação, observaram-se casos
de hermafroditismo e desmasculinização da laringe. O estudo em
questão comparou a concentração de um hormônio específico no
sangue de machos expostos ao agrotóxico com a de outros machos
e fêmeas que não o foram (controles). Os resultados podem ser
vistos na figura. 6 Concentração do hormônio (ng mL − 1 ) 5 4
3 2 1 0 Machos controle Machos expostos à atrazina Fêmeas
controle HAYES, T. B. et al. Hermaphroditic, Demasculinized
Frogs After Exposure to the Herbicide Atrazine at Low
Ecologically Relevant Doses. Proceedings of the National
Academy of Sciences , n. 8, 2002 (adaptado). Com base nas
informações do texto, qual é o hormônio cujas concentrações
estão representadas na figura?`,
    images: ['/enem/2022/images/enem_2022_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Estrogênio.` },
      { id: 'B', type: 'text', value: `Feromônio.` },
      { id: 'C', type: 'text', value: `Testosterona.` },
      { id: 'D', type: 'text', value: `Somatotrofina.` },
      { id: 'E', type: 'text', value: `Hormônio folículo estimulante.` },
    ],
    correct: 'C',
    explanation: `A atrazina provocou hermafroditismo e desmasculinização (inclusive da laringe) em sapos machos, o que indica queda do hormônio sexual masculino. No gráfico, os machos-controle apresentam concentração alta do hormônio (~4 ng/mL), enquanto os machos expostos à atrazina e as fêmeas-controle têm concentração baixa (~0,5 ng/mL). Esse padrão — elevado em machos normais e reduzido nos expostos e nas fêmeas — é o da testosterona, o andrógeno responsável pelos caracteres sexuais masculinos. A resposta é a alternativa C.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma lanterna funciona com três pilhas de resistência interna igual a 0,5 Ω cada, ligadas em série. Quando 
posicionadas corretamente, devem acender a lâmpada incandescente de especificações 4,5 W e 4,5 V. Cada pilha na 
posição correta gera uma f.e.m. (força eletromotriz) de 1,5 V. Uma pessoa, ao trocar as pilhas da lanterna, comete o 
equívoco de inverter a posição de uma das pilhas. Considere que as pilhas mantêm contato independentemente da 
posição. 
Com esse equívoco, qual é a intensidade de corrente que passa pela lâmpada ao se ligar a lanterna?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,25 A` },
      { id: 'B', type: 'text', value: `0,33 A` },
      { id: 'C', type: 'text', value: `0,75 A` },
      { id: 'D', type: 'text', value: `1,00 A` },
      { id: 'E', type: 'text', value: `1,33 A` },
    ],
    correct: 'A',
    explanation: `A lâmpada de 4,5 W e 4,5 V tem resistência R = U²/P = 4,5²/4,5 = 4,5 Ω, e cada pilha tem resistência interna 0,5 Ω (três pilhas em série somam 1,5 Ω). Com uma pilha invertida, as f.e.m. se somam como 1,5 + 1,5 − 1,5 = 1,5 V, pois a pilha invertida se opõe às outras duas. A resistência total do circuito permanece R_total = 4,5 + 1,5 = 6,0 Ω (as três resistências internas continuam em série). A corrente é I = ε/R_total = 1,5 / 6,0 = 0,25 A (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em uma aula prática de bioquímica, para medir a atividade catalítica da enzima catalase, foram realizados seis 
ensaios independentes, nas mesmas condições, variando-se apenas a temperatura. A catalase decompõe o peroxido 
 
Os diferentes resultados dos ensaios justificam-se pelo(a)`,
    images: ['/enem/2022/images/enem_2022_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `variação do pH do meio.` },
      { id: 'B', type: 'text', value: `aumento da energia de ativação.` },
      { id: 'C', type: 'text', value: `consumo da enzima durante o ensaio.` },
      { id: 'D', type: 'text', value: `diminuição da concentração do substrato.` },
      { id: 'E', type: 'text', value: `modificação da estrutura tridimensional da enzima.` },
    ],
    correct: 'E',
    explanation: `A catalase é uma proteína cuja atividade depende de sua conformação (estrutura tridimensional), que possui uma faixa ótima de temperatura. No quadro, a decomposição de H₂O₂ cresce até cerca de 15 °C e depois cai acentuadamente em temperaturas mais altas (25, 30 e 35 °C). Essa queda ocorre porque o aquecimento excessivo desnatura a enzima, alterando sua estrutura tridimensional e o sítio ativo, o que reduz a catálise. Não há mudança de pH, aumento da energia de ativação, consumo da enzima nem falta de substrato nesses ensaios controlados. Os resultados justificam-se pela modificação da estrutura tridimensional da enzima (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Antimicrobianos são substâncias naturais ou sintéticas que têm capacidade de matar ou inibir o crescimento de 
microrganismos. A tabela apresenta uma lista de antimicrobianos hipotéticos, bem como suas ações e efeitos sobre 
o metabolismo microbiano. 
 
Qual dos antimicrobianos deve ser utilizado para curar uma infecção causada por um fungo sem afetar as bactérias 
da microbiota normal do organismo?`,
    images: ['/enem/2022/images/enem_2022_d2_q121.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'B',
    explanation: `O objetivo é eliminar um fungo (eucarioto) sem afetar as bactérias (procariotos) da microbiota. É preciso um alvo presente nos fungos e ausente nas bactérias. O antimicrobiano 2 une-se aos microtúbulos, impedindo a segregação das cromátides; microtúbulos do fuso mitótico existem em células eucarióticas (fungos), mas não em bactérias. Assim, ele atua seletivamente sobre o fungo. Os demais atingiriam estruturas comuns a bactérias (ribossomos, membrana, síntese de DNA/RNA). A resposta é a alternativa B.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O veneno da cascavel pode causar hemorragia com 
risco de morte a quem é picado pela serpente. No entanto, 
pesquisadores do Brasil e da Bélgica desenvolveram uma 
molécula de interesse farmacêutico, a PEG-collineína-1, 
a partir de uma proteína encontrada no veneno dessa 
cobra, capaz de modular a coagulação sanguínea. 
Embora a técnica não seja nova, foi a primeira vez que 
o método foi usado a partir de uma toxina animal na sua 
forma recombinante, ou seja, produzida em laboratório 
por um fungo geneticamente modificado. 
JULIÃO, A. Técnica modifica proteína do veneno de cascavel e permite 
 criar fármaco que modula a coagulação sanguínea . Disponível em: 
 https://agencia.fapesp.br. Acesso em: 22 nov. 2021 (adaptado). 
Esse novo medicamento apresenta potencial aplicação para`,
    alternatives: [
      { id: 'A', type: 'text', value: `impedir a formação de trombos, típicos em alguns casos de acidente vascular cerebral.` },
      { id: 'B', type: 'text', value: `tratar consequências da anemia profunda, em razão da perda de grande volume de sangue.` },
      { id: 'C', type: 'text', value: `evitar a manifestação de urticárias, comumente relacionadas a processos alérgicos.` },
      { id: 'D', type: 'text', value: `reduzir o inchaço dos linfonodos, parte da resposta imunitária de diferentes infecções.` },
      { id: 'E', type: 'text', value: `regular a oscilação da pressão arterial, característica dos quadros de hipertensão.` },
    ],
    correct: 'A',
    explanation: `A PEG-collineína-1, derivada de proteína do veneno da cascavel, modula a coagulação sanguínea; no contexto terapêutico seu interesse é o efeito anticoagulante/antitrombótico. Uma molécula que controla a coagulação pode impedir a formação de trombos (coágulos) que obstruem vasos, situação típica de acidentes vasculares cerebrais isquêmicos. As demais opções (anemia, urticárias alérgicas, linfonodos, pressão arterial) não se relacionam diretamente ao controle da coagulação. A aplicação potencial é impedir a formação de trombos, como em casos de AVC (alternativa A).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um Buraco Negro é um corpo celeste que possui uma 
grande quantidade de matéria concentrada em uma pequena 
região do espaço, de modo que sua força gravitacional é 
tão grande que qualquer partícula fica aprisionada em sua 
superfície, inclusive a luz. O raio dessa região caracteriza 
uma superfície-limite, chamada de horizonte de eventos, 
da qual nada consegue escapar. Considere que o Sol foi 
instantaneamente substituído por um Buraco Negro com 
a mesma massa solar, de modo que o seu horizonte de 
eventos seja de aproximadamente 3,0 km. 
SCHWARZSCHILD, K. On the Gravitational Field of a Mass Point According to 
Einstein’s Theory . Disponível em: arxiv.org. Acesso em: 26 maio 2022 (adaptado). 
Após a substituição descrita, o que aconteceria aos 
planetas do Sistema Solar?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Eles se moveriam em órbitas espirais, aproximando-se sucessivamente do Buraco Negro.` },
      { id: 'B', type: 'text', value: `Eles oscilariam aleatoriamente em torno de suas órbitas elípticas originais.` },
      { id: 'C', type: 'text', value: `Eles se moveriam em direção ao centro do Buraco Negro.` },
      { id: 'D', type: 'text', value: `Eles passariam a precessionar mais rapidamente.` },
      { id: 'E', type: 'text', value: `Eles manteriam suas órbitas inalteradas.` },
    ],
    correct: 'E',
    explanation: `A força gravitacional que o Sol exerce sobre os planetas depende da massa do Sol e da distância, F = G·M·m/r². Como o buraco negro teria exatamente a mesma massa solar, o campo gravitacional a partir da antiga distância dos planetas permaneceria idêntico. O horizonte de eventos de 3 km está muitíssimo mais próximo do centro do que qualquer órbita planetária, portanto não afeta os planetas. Assim, nada mudaria na dinâmica orbital e os planetas manteriam suas órbitas inalteradas (alternativa E).`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Durante o ano de 2020, impulsionado pela necessidade 
de respostas rápidas e eficientes para desinfectar ambientes 
de possíveis contaminações com o SARS-CoV-2, causador 
da covid-19, diversas alternativas foram buscadas para 
os procedimentos de descontaminação de materiais e 
ambientes. Entre elas, o uso de ozônio em meio aquoso 
como agente sanitizante para pulverização em humanos 
e equipamentos de proteção em câmaras ou túneis, 
higienização de automóveis e de ambientes fechados e 
descontaminação de trajes. No entanto, pouca atenção foi 
dada à toxicidade do ozônio, à formação de subprodutos, ao 
nível de concentração segura e às precauções necessárias. 
LIMA, M. J. A.; FÉLIX, E. P.; CARDOSO, A. A. Aplicações e implicações do ozônio na 
indústria, ambiente e saúde. Química Nova , n. 9, 2021 (adaptado). 
O grande risco envolvido no emprego indiscriminado 
dessa substância deve-se à sua ação química como`,
    alternatives: [
      { id: 'A', type: 'text', value: `catalisador.` },
      { id: 'B', type: 'text', value: `oxidante.` },
      { id: 'C', type: 'text', value: `redutor.` },
      { id: 'D', type: 'text', value: `ácido.` },
      { id: 'E', type: 'text', value: `base.` },
    ],
    correct: 'B',
    explanation: `O ozônio (O₃) é empregado como sanitizante justamente por ser um agente oxidante muito forte, capaz de destruir vírus e microrganismos ao oxidar suas moléculas. Esse mesmo poder oxidante é o que o torna tóxico a células humanas e capaz de gerar subprodutos de oxidação quando usado de forma indiscriminada. O risco, portanto, decorre de sua ação química como oxidante, e não como catalisador, redutor, ácido ou base. A resposta é a alternativa B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Na figura está representado o mosaicismo em função da
inativação aleatória de um dos cromossomos X, que ocorre em
todas as mulheres sem alterações patológicas. Gameta masculino
(22+X) Amostras de células corporais Zigoto (44+XX) Gameta
feminino (22+X) Blástula (44+XX) Células com cromossomo X
paterno inativado Células com cromossomo X materno inativado
Entre mulheres heterozigotas para doenças determinadas por
genes recessivos ligados ao sexo, essa inativação tem como
consequência a ocorrência de`,
    images: ['/enem/2022/images/enem_2022_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `pleiotropia.` },
      { id: 'B', type: 'text', value: `mutação gênica.` },
      { id: 'C', type: 'text', value: `interação gênica.` },
      { id: 'D', type: 'text', value: `penetrância incompleta.` },
      { id: 'E', type: 'text', value: `expressividade variável.` },
    ],
    correct: 'E',
    explanation: `Em mulheres, um dos cromossomos X é inativado aleatoriamente em cada célula (corpúsculo de Barr), originando um mosaico: parte das células expressa o X paterno e parte o X materno. Em heterozigotas para genes recessivos ligados ao X, algumas células expressarão o alelo recessivo (X normal inativado) e outras o dominante, gerando manifestação do caráter em graus/regiões variáveis do corpo. Esse fenômeno, em que indivíduos de mesmo genótipo apresentam intensidade/distribuição diferente do fenótipo, chama-se expressividade variável. Não se trata de pleiotropia, mutação, interação gênica ou penetrância incompleta. A resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A água bruta coletada de mananciais apresenta 
alto índice de sólidos suspensos, o que a deixa com 
um aspecto turvo. Para se obter uma água límpida e 
potável, ela deve passar por um processo de purificação 
numa estação de tratamento de água. Nesse processo, 
as principais etapas são, nesta ordem: coagulação, 
decantação, filtração, desinfecção e fluoretação. 
Qual é a etapa de retirada de grande parte desses 
sólidos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Coagulação.` },
      { id: 'B', type: 'text', value: `Decantação.` },
      { id: 'C', type: 'text', value: `Filtração.` },
      { id: 'D', type: 'text', value: `Desinfecção.` },
      { id: 'E', type: 'text', value: `Fluoretação.` },
    ],
    correct: 'B',
    explanation: `Nas etapas de tratamento, a coagulação apenas aglutina as partículas em flocos maiores por meio de coagulantes; é na decantação seguinte que esses flocos mais densos sedimentam por ação da gravidade, retirando a maior parte dos sólidos suspensos. A filtração posterior remove partículas finas residuais, e desinfecção e fluoretação tratam a qualidade microbiológica e a saúde dental. Logo, a etapa responsável pela retirada de grande parte dos sólidos é a decantação (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Os ursos, por não apresentarem uma hibernação 
verdadeira, acordam por causa da presença de 
termogenina, uma proteína mitocondrial que impede a 
chegada dos prótons até a ATP sintetase, gerando calor. 
Esse calor é importante para aquecer o organismo, 
permitindo seu despertar. 
SADAVA, D. et al. Vida: a ciência da biologia . Porto Alegre: Artmed, 2009 (adaptado). 
Em qual etapa do metabolismo energético celular a 
termogenina interfere?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Glicólise.` },
      { id: 'B', type: 'text', value: `Fermentação lática.` },
      { id: 'C', type: 'text', value: `Ciclo do ácido cítrico.` },
      { id: 'D', type: 'text', value: `Oxidação do piruvato.` },
      { id: 'E', type: 'text', value: `Fosforilação oxidativa.` },
    ],
    correct: 'E',
    explanation: `A termogenina impede que os prótons (H⁺) acumulados no espaço intermembranas da mitocôndria retornem pela ATP-sintase, desfazendo o gradiente e gerando calor em vez de ATP. Esse gradiente de prótons e a ATP-sintase pertencem à etapa da fosforilação oxidativa, na cadeia respiratória da membrana interna mitocondrial. Portanto a proteína interfere justamente nessa etapa (desacoplando a síntese de ATP), e não na glicólise, fermentação, ciclo de Krebs ou oxidação do piruvato. A resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A fim de classificar as melhores rotas em um aplicativo de trânsito, um pesquisador propõe um modelo com base em circuitos elétricos. Nesse modelo, a corrente representa o número de carros que passam por um ponto da pista no intervalo de 1 s. A diferença de potencial (d.d.p.) corresponde à quantidade de energia por carro necessária para o deslocamento de 1 m. De forma análoga à lei de Ohm, cada via é classificada pela sua resistência, sendo a de maior resistência a mais congestionada. O aplicativo mostra as rotas em ordem crescente, ou seja, da rota de menor para a de maior resistência.
Como teste para o sistema, são utilizadas três possíveis vias para uma viagem de A até B, com os seguintes valores de d.d.p. (J/carro.m) e corrente (carros/s):
Rota 1: d.d.p. 510, corrente 4
Rota 2: d.d.p. 608, corrente 4
Rota 3: d.d.p. 575, corrente 3
Nesse teste, a ordenação das rotas indicadas pelo aplicativo será:`,
    images: ['/enem/2022/images/enem_2022_d2_q128.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1, 2, 3.` },
      { id: 'B', type: 'text', value: `1, 3, 2.` },
      { id: 'C', type: 'text', value: `2, 1, 3.` },
      { id: 'D', type: 'text', value: `3, 1, 2.` },
      { id: 'E', type: 'text', value: `3, 2, 1.` },
    
    ],
    correct: 'A',
    explanation: `No modelo, cada via equivale a um resistor, com resistência dada pela lei de Ohm R = U/i (d.d.p. dividida pela corrente). Calculando: Rota 1 = 510/4 = 127,5; Rota 2 = 608/4 = 152; Rota 3 = 575/3 ≈ 191,7 (unidades do modelo). O aplicativo ordena da menor para a maior resistência (menos para mais congestionada): 127,5 < 152 < 191,7, ou seja, Rota 1, Rota 2, Rota 3. A resposta é a alternativa A.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O esquema representa o ciclo do nitrogênio: Plantas Bactérias
desnitri-ficantes Assimilação Bactérias fixa-doras de N₂ nos
nódulos de raízes de leguminosas Nitratos (NO₃ − )
Decompositores (fungos e bactérias aeróbicas e anaeróbicas)
Bactérias nitrificantes Nitrificação Amonificação Amônia e
Amônio (NH₃ ) (NH₄ + ) Nitritos (NO₂ − ) Bactérias fixadoras
de N₂ no solo Bactérias nitrificantes A chuva ácida interfere
no ciclo do nitrogênio, principalmente, por proporcionar uma
diminuição do pH do solo e da atmosfera, alterando a
concentração dos compostos presentes nesse ciclo. Disponível
em: http://scienceprojectideasforkids.com. Acesso em: 6 ago.
2012 (adaptado). Em um solo de menor pH, será favorecida a
formação de:`,
    images: ['/enem/2022/images/enem_2022_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `N₂` },
      { id: 'B', type: 'text', value: `NH₃` },
      { id: 'C', type: 'text', value: `NH₄⁺` },
      { id: 'D', type: 'text', value: `NO₂⁻` },
      { id: 'E', type: 'text', value: `NO₃⁻` },
    ],
    correct: 'C',
    explanation: `A chuva ácida diminui o pH do solo, aumentando a disponibilidade de íons H⁺. No equilíbrio entre amônia e amônio, a amônia (NH₃) é uma base que capta prótons: NH₃ + H⁺ ⇌ NH₄⁺. Com mais H⁺ disponível (meio mais ácido), o equilíbrio se desloca no sentido de formar o íon amônio (NH₄⁺). Assim, em solo de menor pH é favorecida a formação de NH₄⁺, correspondente à alternativa C.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `No processo de captação da luz pelo olho para a 
formação de imagens estão envolvidas duas estruturas 
celulares: os cones e os bastonetes. Os cones são sensíveis 
à energia dos fótons, e os bastonetes, à quantidade de 
fótons incidentes. A energia dos fótons que compõem 
os raios luminosos está associada à sua frequência, e a 
intensidade, ao número de fótons incidentes. 
Um animal que tem bastonetes mais sensíveis irá`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresentar daltonismo.` },
      { id: 'B', type: 'text', value: `perceber cores fora do espectro do visível.` },
      { id: 'C', type: 'text', value: `enxergar bem em ambientes mal iluminados.` },
      { id: 'D', type: 'text', value: `necessitar de mais luminosidade para enxergar.` },
      { id: 'E', type: 'text', value: `fazer uma pequena distinção de cores em ambientes iluminados.` },
    ],
    correct: 'C',
    explanation: `A energia de cada fóton está associada à frequência da luz (cor), enquanto a intensidade luminosa corresponde ao número de fótons incidentes. Os bastonetes são sensíveis à quantidade de fótons, isto é, respondem bem mesmo quando poucos fótons chegam. Um animal com bastonetes mais sensíveis consegue detectar baixas intensidades de luz e, portanto, enxergar bem em ambientes mal iluminados. Os cones (sensíveis à energia/frequência) é que diferenciam cores; bastonetes mais sensíveis não causam daltonismo nem exigem mais luz. A resposta é a alternativa C.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `De modo geral, a palavra “aromático” invoca associações
agradáveis, como cheiro de café fresco ou de um pão doce de
canela. Associações similares ocorriam no passado da história
da química orgânica, quando os compostos ditos “aromáticos”
apresentavam um odor agradável e foram isolados de óleos
naturais. À medida que as estruturas desses compostos eram
elucidadas, foi se descobrindo que vários deles continham uma
unidade estrutural especifica. Os compostos aromáticos que
continham essa unidade estrutural tornaram-se parte de uma
grande família, muito mais com base em suas estruturas
eletrônicas do que nos seus cheiros, como as substâncias a
seguir, encontradas em óleos vegetais. H O O OH Benzaldeído
(no óleo de amêndoas) Salicilato de metila (no óleo de
gaultéria) Anetol (no óleo de anis) H O O H O C H₃ O OH CH₃
Vanilina (no óleo de baunilha) Eugenol (no óleo de cravos)
Cinamaldeído (no óleo de canela) SOLOMONS, T. W. G.; FRYHLE,
C. B. Química orgânica . Rio de Janeiro: LTC, 2009 (adaptado).
A característica estrutural dessa família de compostos é a
presença de`,
    images: ['/enem/2022/images/enem_2022_d2_q131.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ramificações.` },
      { id: 'B', type: 'text', value: `insaturações.` },
      { id: 'C', type: 'text', value: `anel benzênico.` },
      { id: 'D', type: 'text', value: `átomos de oxigênio.` },
      { id: 'E', type: 'text', value: `carbonos assimétricos.` },
    ],
    correct: 'C',
    explanation: `Todas as substâncias citadas (benzaldeído, salicilato de metila, anetol, vanilina, eugenol e cinamaldeído) são classificadas como compostos aromáticos. O critério moderno de aromaticidade não é o cheiro, mas a estrutura eletrônica: a presença de um anel benzênico (ou anel aromático com elétrons π deslocalizados segundo a regra de Hückel). Essa unidade estrutural comum é o que reúne esses compostos na mesma família. Ramificações, insaturações isoladas, átomos de oxigênio ou carbonos assimétricos não são a característica definidora. A resposta é a alternativa C.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Os resultados de um ensaio clínico randomizado na Indonésia apontaram uma redução de 77% dos casos de 
dengue nas áreas que receberam o mosquito Aedes aegypti infectado com a bactéria Wolbachia . Trata-se da mesma 
técnica utilizada no Brasil pelo Método Wolbachia, iniciativa conduzida pela Fundação Oswaldo Cruz - Fiocruz. Essa 
bactéria induz a redução da carga viral no mosquito e, consequentemente, o número de casos de dengue na área, 
sendo repassada por meio do cruzamento entre os insetos. Como essa bactéria é um organismo intracelular e o vírus 
também precisa entrar nas células para se reproduzir, ambos necessitarão de recursos comuns.   
COSTA, G. Agência Fiocruz de Notícias.  Estudo confirma eficácia do Método Wolbachia para dengue . Disponível em: https://portal.fiocruz.br. Acesso em: 3 jun. 2022 (adaptado). 
Essa tecnologia utilizada no combate à dengue consiste na`,
    alternatives: [
      { id: 'A', type: 'text', value: `predação do vírus pela bactéria.` },
      { id: 'B', type: 'text', value: `esterilização de mosquitos infectados.` },
      { id: 'C', type: 'text', value: `alteração no genótipo do mosquito pela bactéria.` },
      { id: 'D', type: 'text', value: `competição do vírus e da bactéria no hospedeiro.` },
      { id: 'E', type: 'text', value: `inserção de material genético do vírus na bactéria.` },
    ],
    correct: 'D',
    explanation: `A bactéria Wolbachia é um organismo intracelular obrigatório e o vírus da dengue também precisa entrar nas células do mosquito para se multiplicar; ambos dependem dos mesmos recursos celulares. Ao ocupar o interior das células do Aedes aegypti, a Wolbachia compete por esses recursos, reduzindo a carga viral e, por consequência, a capacidade de o mosquito transmitir a dengue. Não há predação do vírus, esterilização dos mosquitos, alteração do genótipo do inseto nem troca de material genético. A tecnologia baseia-se na competição entre o vírus e a bactéria no hospedeiro (alternativa D).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O protozoário Trypanosoma cruzi , causador da 
doença de Chagas, pode ser a nova arma da medicina 
contra o câncer. Pesquisadores brasileiros conseguiram 
criar uma vacina contra a doença usando uma variação 
do protozoário incapaz de desencadear a patologia (não 
patogênico). Para isso, realizaram uma modificação 
genética criando um T. cruzi capaz de produzir também 
moléculas fabricadas pelas células tumorais. Quando 
o organismo inicia o combate ao protozoário, entra em 
contato também com a molécula tumoral, que passa a ser 
vista também pelo sistema imune como um indicador de 
células do protozoário. Depois de induzidas as defesas, 
estas passam a destruir todas as células com a molécula 
tumoral, como se lutassem apenas contra o protozoário . 
Disponível em: www.estadão.com.br. Acesso em: 1 mar. 2012 (adaptado). 
Qual o mecanismo utilizado no experimento para enganar 
as células de defesa, fazendo com que ataquem o tumor?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Autoimunidade.` },
      { id: 'B', type: 'text', value: `Hipersensibilidade.` },
      { id: 'C', type: 'text', value: `Ativação da resposta inata.` },
      { id: 'D', type: 'text', value: `Apresentação de antígeno específico.` },
      { id: 'E', type: 'text', value: `Desencadeamento de processo anti-inflamatório.` },
    ],
    correct: 'D',
    explanation: `O T. cruzi não patogênico foi modificado para produzir também moléculas (antígenos) típicas das células tumorais. Ao combater o protozoário, o sistema imune entra em contato com esses antígenos tumorais, que são processados e apresentados às células de defesa como se fossem do protozoário. A partir dessa apresentação de antígeno específico, os linfócitos passam a reconhecer e destruir todas as células que exibem aquela molécula tumoral, atacando o câncer. O mecanismo é a apresentação de antígeno específico (alternativa D).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O sinal sonoro oriundo da queda de um grande bloco de gelo de
uma geleira é detectado por dois dispositivos situados em um
barco, sendo que o detector A está imerso em água e o B, na
proa da embarcação. Sabe-se que a velocidade do som na água é
de 1 540 m s e no ar é de 340 m s . L B A Os gráficos indicam,
em tempo real, o sinal sonoro detectado pelos dois
dispositivos, os quais foram ligados simultaneamente em um
instante anterior à queda do bloco de gelo. Ao comparar pontos
correspondentes desse sinal em cada dispositivo, é possível
obter informações sobre a onda sonora. A B Sinal Sinal Tempo
(s) Tempo (s) 208 220 232 244 208 220 232 244 A distância L,
em metro, entre o barco e a geleira é mais próxima de`,
    images: ['/enem/2022/images/enem_2022_d2_q134_1.jpg', '/enem/2022/images/enem_2022_d2_q134_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `339 000.` },
      { id: 'B', type: 'text', value: `78 900.` },
      { id: 'C', type: 'text', value: `14 400.` },
      { id: 'D', type: 'text', value: `5 240.` },
      { id: 'E', type: 'text', value: `100.` },
    ],
    correct: 'D',
    explanation: `O som gerado na queda do gelo percorre a mesma distância L até o barco por dois meios: pela água (até o detector A) e pelo ar (até o detector B), chegando ao ar com atraso. A diferença de tempo entre os sinais, lida nos gráficos, é Δt ≈ 12 s. Como Δt = L/v_ar − L/v_água, temos L = Δt / (1/340 − 1/1540) = 12 / (0,002941 − 0,000649) = 12 / 0,002292 ≈ 5 240 m. Portanto a distância entre o barco e a geleira é de aproximadamente 5 240 m (alternativa D).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em 2002, um mecânico da cidade mineira de 
Uberaba (MG) teve uma ideia para economizar o 
consumo de energia elétrica e iluminar a própria casa 
num dia de sol. Para isso, ele utilizou garrafas plásticas 
PET com água e cloro, conforme ilustram as figuras. 
Cada garrafa foi fixada ao telhado de sua casa em um 
buraco com diâmetro igual ao da garrafa, muito maior 
que o comprimento de onda da luz. Nos últimos dois 
anos, sua ideia já alcançou diversas partes do mundo 
e deve atingir a marca de 1 milhão de casas utilizando 
a “luz engarrafada”. 
ZOBEL, G. Brasileiro inventor de “luz engarrafada” tem ideia espalhada pelo mundo . 
Disponível em: www.bbc.com. Acesso em: 23 jun. 2022 (adaptado). 
Que fenômeno óptico explica o funcionamento da “luz 
engarrafada”?`,
    images: ['/enem/2022/images/enem_2022_d2_q135.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Difração.` },
      { id: 'B', type: 'text', value: `Absorção.` },
      { id: 'C', type: 'text', value: `Polarização.` },
      { id: 'D', type: 'text', value: `Reflexão.` },
      { id: 'E', type: 'text', value: `Refração.` },
    ],
    correct: 'E',
    explanation: `A garrafa PET cheia de água funciona como uma fonte de luz porque a luz solar que entra é redirecionada para dentro do cômodo ao atravessar a interface entre meios de diferentes índices de refração (ar–água–plástico). Esse desvio da trajetória da luz ao mudar de meio é o fenômeno da refração, que espalha a luz incidente para iluminar o ambiente. Como a abertura é muito maior que o comprimento de onda, a difração é desprezível; não se trata de absorção, polarização nem de simples reflexão especular. O funcionamento da 'luz engarrafada' é explicado pela refração (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma máquina em operação tem sua temperatura T monitorada por
meio de um registro gráfico, ao longo do tempo t . Essa
máquina possui um pistão cuja velocidade V varia com a
temperatura T da máquina, de acordo com a expressão V = T 2 −
4. Após a máquina funcionar durante o intervalo de tempo de 10
horas, o seu operador analisa o registro gráfico, apresentado
na figura, para avaliar a necessidade de eventuais ajustes,
sabendo que a máquina apresenta falhas de funcionamento quando
a velocidade do pistão se anula. T (ºC) 4 2 0 10 t (h) − 2
Quantas vezes a velocidade do pistão se anulou durante as 10
horas de funcionamento?`,
    images: ['/enem/2022/images/enem_2022_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'E',
    explanation: `A velocidade anula-se quando V = T² − 4 = 0, ou seja, T = 2 ou T = −2. No gráfico de T(t), ao longo das 10 h a temperatura assume o valor +2 duas vezes (na descida inicial e na subida final) e o valor −2 três vezes (nos três vales), totalizando 5 instantes em que a velocidade se anula. Resposta: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A World Series é a decisão do campeonato 
norte-americano de beisebol. Os dois times que chegam 
a essa fase jogam, entre si, até sete partidas. O primeiro 
desses times que completar quatro vitórias é declarado 
campeão. 
Considere que, em todas as partidas, a probabilidade 
de qualquer um dos dois times vencer é sempre 1 
2 . 
Qual é a probabilidade de o time campeão ser aquele que 
venceu a primeira partida da World Series ?`,
    alternatives: [
      { id: 'A', type: 'text', value: `35/64` },
      { id: 'B', type: 'text', value: `40/64` },
      { id: 'C', type: 'text', value: `42/64` },
      { id: 'D', type: 'text', value: `44/64` },
      { id: 'E', type: 'text', value: `52/64` },
    ],
    correct: 'C',
    explanation: `O time que venceu o 1º jogo precisa de mais 3 vitórias antes que o adversário conquiste 4, nos até 6 jogos restantes. Imaginando os 6 jogos disputados, esse time é campeão se vencer pelo menos 3 deles: P = [C(6,3)+C(6,4)+C(6,5)+C(6,6)]/2⁶ = (20+15+6+1)/64 = 42/64. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: ``,
    images: ['/enem/2022/images/enem_2022_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,5` },
      { id: 'B', type: 'text', value: `2,0` },
      { id: 'C', type: 'text', value: `2,9` },
      { id: 'D', type: 'text', value: `3,0` },
      { id: 'E', type: 'text', value: `5,5` },
    ],
    correct: 'D',
    explanation: `Lucro = receita − despesa nos meses com lucro (diferença positiva): Jan 6−3=3, Mar 3−2=1, Maio 6−1=5, Jun 5−2=3, Jul 6−4=2, Set 7−3=4, Nov 8−7=1 (os demais meses deram prejuízo ou zero). Ordenando os 7 lucros: 1, 1, 2, 3, 3, 4, 5; a mediana é o 4º valor = 3,0. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um casal está reformando a cozinha de casa e 
decidiu comprar um refrigerador novo. Observando a 
planta da nova cozinha, desenhada na escala de 1 : 50, 
notaram que o espaço destinado ao refrigerador tinha 
3,8 cm de altura e 1,6 cm de largura. Eles sabem que 
os fabricantes de refrigeradores indicam que, para um 
bom funcionamento e fácil manejo na limpeza, esses 
eletrodomésticos devem ser colocados em espaços que 
permitam uma distância de, pelo menos, 10 cm de outros 
móveis ou paredes, tanto na parte superior quanto nas 
laterais. O casal comprou um refrigerador que caberia 
no local a ele destinado na nova cozinha, seguindo as 
instruções do fabricante. 
Esse refrigerador tem altura e largura máximas, em 
metro, respectivamente, iguais a`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,80 e 0,60.` },
      { id: 'B', type: 'text', value: `1,80 e 0,70.` },
      { id: 'C', type: 'text', value: `1,90 e 0,80.` },
      { id: 'D', type: 'text', value: `2,00 e 0,90.` },
      { id: 'E', type: 'text', value: `2,00 e 1,00.` },
    ],
    correct: 'A',
    explanation: `Escala 1:50: cada 1 cm na planta equivale a 50 cm reais. Espaço: 3,8 cm × 50 = 190 cm de altura e 1,6 cm × 50 = 80 cm de largura. Descontando a folga de 10 cm: no topo, 190 − 10 = 180 cm = 1,80 m; nas laterais, 80 − 10 − 10 = 60 cm = 0,60 m. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Foram convidadas 32 equipes para um torneio de 
futebol, que foram divididas em 8 grupos com 4 equipes, 
sendo que, dentro de um grupo, cada equipe disputa uma 
única partida contra cada uma das demais equipes de 
seu grupo. A primeira e a segunda colocadas de cada 
grupo seguem para realizar as 8 partidas da próxima 
fase do torneio, chamada oitavas de final. Os vencedores 
das partidas das oitavas de final seguem para jogar 
as 4 partidas das quartas de final. Os vencedores das 
quartas de final disputam as 2 partidas das semifinais, e 
os vencedores avançam para a grande final, que define a 
campeã do torneio. 
Pelas regras do torneio, cada equipe deve ter um 
período de descanso de, no mínimo, 3 dias entre dois 
jogos por ela disputados, ou seja, se um time disputar 
uma partida, por exemplo, num domingo, só poderá 
disputar a partida seguinte a partir da quinta-feira da 
mesma semana. 
O número mínimo de dias necessários para a realização 
desse torneio é`,
    alternatives: [
      { id: 'A', type: 'text', value: `22.` },
      { id: 'B', type: 'text', value: `25.` },
      { id: 'C', type: 'text', value: `28.` },
      { id: 'D', type: 'text', value: `48.` },
      { id: 'E', type: 'text', value: `64.` },
    ],
    correct: 'B',
    explanation: `Cada equipe joga a cada 4 dias (3 de descanso: ex. domingo→quinta). Fase de grupos: 3 rodadas nos dias 1, 5 e 9. Oitavas: dia 13; quartas: dia 17; semifinais: dia 21; final: dia 25. Logo, são necessários no mínimo 25 dias. Resposta: B.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em um jogo de bingo, as cartelas contêm 16 quadrículas
dispostas em linhas e colunas. Cada quadrícula tem impresso um
número, dentre os inteiros de 1 a 50, sem repetição de número.
Na primeira rodada, um número é sorteado, aleatoriamente,
dentre os 50 possíveis. Em todas as rodadas, o número sorteado
é descartado e não participa dos sorteios das rodadas
seguintes. Caso o jogador tenha em sua cartela o número
sorteado, ele o assinala na cartela. Ganha o jogador que
primeiro conseguir preencher quatro quadrículas que formam uma
linha, uma coluna ou uma diagonal, conforme os tipos de
situações ilustradas na Figura 1. Preenchimento em linha
Preenchimento em coluna Preenchimento em diagonal Figura 1 O
jogo inicia e, nas quatro primeiras rodadas, foram sorteados
os seguintes números: 03, 27, 07 e 48. Ao final da quarta
rodada, somente Pedro possuía uma cartela que continha esses
quatro números sorteados, sendo que todos os demais jogadores
conseguiram assinalar, no máximo, um desses números em suas
cartelas. Observe na Figura 2 o cartão de Pedro após as quatro
primeiras rodadas. 03 48 27 12 49 11 22 05 29 50 19 45 07 33
23 38 Figura 2 A probabilidade de Pedro ganhar o jogo em uma
das duas próximas rodadas é`,
    images: ['/enem/2022/images/enem_2022_d2_q141_1.jpg', '/enem/2022/images/enem_2022_d2_q141_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1/46 + 1/45` },
      { id: 'B', type: 'text', value: `1/46 + 2/(46×45)` },
      { id: 'C', type: 'text', value: `1/46 + 8/(46×45)` },
      { id: 'D', type: 'text', value: `1/46 + 43/(46×45)` },
      { id: 'E', type: 'text', value: `1/46 + 49/(46×45)` },

    ],
    correct: 'E',
    explanation: `Pedro já marcou 03, 48, 27 (linha 1) e 07 (canto). Ele vence se, em até 2 rodadas, completar a linha 1 (falta só o 12), a coluna do 27–07 (faltam 05 e 45) ou a diagonal 03–07 (faltam 11 e 19). Restam 46 números. Vencer na 5ª rodada (sair o 12): 1/46. Vencer só na 6ª: (a) sair o 12 na 6ª = (45/46)(1/45) = 45/(46×45); (b) sair {05,45} nas duas rodadas = 2/(46×45); (c) sair {11,19} = 2/(46×45). Total = 1/46 + 45/(46×45) + 2/(46×45) + 2/(46×45) = 1/46 + 49/(46×45). Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma montadora de automóveis divulgou que oferta a 
seus clientes mais de 1 000 configurações diferentes de 
carro, variando o modelo, a motorização, os opcionais e 
a cor do veículo. Atualmente, ela oferece 7 modelos de 
carros com 2 tipos de motores: 1.0 e 1.6. Já em relação 
aos opcionais, existem 3 escolhas possíveis: central 
multimídia, rodas de liga leve e bancos de couro, podendo 
o cliente optar por incluir um, dois, três ou nenhum dos 
opcionais disponíveis. 
Para ser fiel à divulgação feita, a quantidade mínima 
de cores que a montadora deverá disponibilizar a seus 
clientes é`,
    alternatives: [
      { id: 'A', type: 'text', value: `8.` },
      { id: 'B', type: 'text', value: `9.` },
      { id: 'C', type: 'text', value: `11.` },
      { id: 'D', type: 'text', value: `18.` },
      { id: 'E', type: 'text', value: `24.` },
    ],
    correct: 'B',
    explanation: `Modelos × motores × opcionais × cores = 7 × 2 × 2³ × C, pois cada um dos 3 opcionais pode ou não ser incluído (2³ = 8 combinações). Assim 112·C > 1000 ⇒ C > 8,9 ⇒ no mínimo 9 cores. Resposta: B.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Dentre as diversas planificações possíveis para o 
cubo, uma delas é a que se encontra apresentada na 
Figura 1. 
Figura 1 
Em um cubo, foram pintados, em três de suas faces, 
quadrados de cor cinza escura, que ocupam um quarto 
dessas faces, tendo esses três quadrados um vértice em 
comum, conforme ilustrado na Figura 2. 
Figura 2 
A planificação do cubo da Figura 2, conforme o tipo de 
planificação apresentada na Figura 1, é`,
    images: ['/enem/2022/images/enem_2022_d2_q143_1.jpg', '/enem/2022/images/enem_2022_d2_q143_2.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q143_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q143_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q143_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q143_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q143_E.jpg` },
    ],
    correct: 'D',
    explanation: `As três faces pintadas têm um quarto sombreado e compartilham um mesmo vértice do cubo. Na planificação dada (em escada), apenas a opção D posiciona os três quadradinhos cinza de modo que, ao dobrar, eles se encontrem no vértice comum das três faces adjacentes. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Cada número que identifica uma agência bancária tem quatro
dígitos: N 1 , N 2 , N 3 , N 4 mais um dígito verificador N 5
. N 1 N 2 N 3 N 4 N 5 Todos esses dígitos são números naturais
pertencentes ao conjunto {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. Para
a determinação de N 5 , primeiramente multiplica-se
ordenadamente os quatro primeiros dígitos do número da agência
por 5, 4, 3 e 2, respectivamente, somam-se os resultados e
obtém-se S = 5 N 1 + 4 N 2 + 3 N 3 + 2 N 4 . Posteriormente,
encontra-se o resto da divisão de S por 11, denotando por R
esse resto. Dessa forma, N 5 e a diferença 11 − R. Considere o
número de uma agência bancária cujos quatro primeiros dígitos
são 0100. Qual é o dígito verificador N 5 dessa agência
bancária?`,
    images: ['/enem/2022/images/enem_2022_d2_q144.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `6` },
      { id: 'C', type: 'text', value: `7` },
      { id: 'D', type: 'text', value: `8` },
      { id: 'E', type: 'text', value: `9` },
    ],
    correct: 'C',
    explanation: `Com os dígitos 0100: S = 5·0 + 4·1 + 3·0 + 2·0 = 4. O resto da divisão de 4 por 11 é R = 4. Logo N₅ = 11 − R = 11 − 4 = 7. Resposta: C.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O pacote básico de um jogo para smartphone, que 
é vendido a R$ 50,00, contém 2 000 gemas e 100 000 
moedas de ouro, que são itens utilizáveis nesse jogo. 
A empresa que comercializa esse jogo decidiu criar 
um pacote especial que será vendido a R$ 100,00 e que 
se diferenciará do pacote básico por apresentar maiores 
quantidades de gemas e moedas de ouro. Para estimular 
as vendas desse novo pacote, a empresa decidiu inserir 
nele 6 000 gemas a mais, em relação ao que o cliente 
teria caso optasse por comprar, com a mesma quantia, 
dois pacotes básicos. 
A quantidade de moedas de ouro que a empresa deverá 
inserir ao pacote especial, para que seja mantida a mesma 
proporção existente entre as quantidades de gemas e de 
moedas de ouro contidas no pacote básico, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `50 000.` },
      { id: 'B', type: 'text', value: `100 000.` },
      { id: 'C', type: 'text', value: `200 000.` },
      { id: 'D', type: 'text', value: `300 000.` },
      { id: 'E', type: 'text', value: `400 000.` },
    ],
    correct: 'E',
    explanation: `No pacote básico a proporção gemas:moedas é 2 000 : 100 000 = 1 : 50 (cada gema corresponde a 50 moedas). Mantendo essa proporção para as 8 000 gemas do pacote especial, o número de moedas de ouro é 8 000 × 50 = 400 000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um parque tem dois circuitos de tamanhos 
diferentes para corridas. Um corredor treina nesse 
parque e, no primeiro dia, inicia seu treino percorrendo 
3 voltas em torno do circuito maior e 2 voltas em torno 
do menor, perfazendo um total de 1 800 m. Em seguida, 
dando continuidade a seu treino, corre mais 2 voltas 
em torno do circuito maior e 1 volta em torno do menor, 
percorrendo mais 1 100 m. 
No segundo dia, ele pretende percorrer 5 000 m nos 
circuitos do parque, fazendo um número inteiro de voltas 
em torno deles e de modo que o número de voltas seja o 
maior possível. 
A soma do número de voltas em torno dos dois circuitos, 
no segundo dia, será`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `13.` },
      { id: 'C', type: 'text', value: `14.` },
      { id: 'D', type: 'text', value: `15.` },
      { id: 'E', type: 'text', value: `16.` },
    ],
    correct: 'E',
    explanation: `Sejam M e m os comprimentos (m) das voltas maior e menor. 3M + 2m = 1800 e 2M + m = 1100 ⇒ m = 1100 − 2M; substituindo: 3M + 2200 − 4M = 1800 ⇒ M = 400 e m = 300. No 2º dia: 400b + 300s = 5000, isto é 4b + 3s = 50, maximizando b + s (priorizar o circuito menor, de 300 m). A solução inteira que maximiza é (b, s) = (2, 14), dando b + s = 16. Resposta: E.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma equipe de marketing digital foi contratada para 
aumentar as vendas de um produto ofertado em um site 
de comércio eletrônico. Para isso, elaborou um anúncio 
que, quando o cliente clica sobre ele, é direcionado 
para a página de vendas do produto. Esse anúncio foi 
divulgado em duas redes sociais, A e B, e foram obtidos 
os seguintes resultados: 
• rede social A: o anúncio foi visualizado por 
3 000 pessoas; 10% delas clicaram sobre o anúncio 
e foram redirecionadas para o site; 3% das que 
clicaram sobre o anúncio compraram o produto. 
O investimento feito para a publicação do anúncio 
nessa rede foi de R$ 100,00; 
• rede social B: o anúncio foi visualizado por 
1 000 pessoas; 30% delas clicaram sobre o anúncio 
e foram redirecionadas para o site; 2% das que 
clicaram sobre o anúncio compraram o produto. 
O investimento feito para a publicação do anúncio 
nessa rede foi de R$ 200,00. 
Por experiência, o pessoal da equipe de marketing 
considera que a quantidade de novas pessoas que verão 
o anúncio é diretamente proporcional ao investimento 
realizado, e que a quantidade de pessoas que comprarão 
o produto também se manterá proporcional à quantidade 
de pessoas que clicarão sobre o anúncio. 
O responsável pelo produto decidiu, então, investir 
mais R$ 300,00 em cada uma das duas redes sociais 
para a divulgação desse anúncio e obteve, de fato, o 
aumento proporcional esperado na quantidade de clientes 
que compraram esse produto. Para classificar o aumento 
obtido na quantidade ( Q ) de compradores desse produto, 
em consequência dessa segunda divulgação, em relação 
aos resultados observados na primeira divulgação, o 
responsável pelo produto adotou o seguinte critério: 
• Q ≤ 60%: não satisfatório; 
• 60% < Q ≤ 100%: regular; 
• 100% < Q ≤ 150%: bom; 
• 150% < Q ≤ 190%: muito bom; 
• 190% < Q ≤ 200%: excelente. 
O aumento na quantidade de compradores, em 
consequência dessa segunda divulgação, em relação 
ao que foi registrado com a primeira divulgação, foi 
classificado como`,
    alternatives: [
      { id: 'A', type: 'text', value: `não satisfatório.` },
      { id: 'B', type: 'text', value: `regular.` },
      { id: 'C', type: 'text', value: `bom.` },
      { id: 'D', type: 'text', value: `muito bom.` },
      { id: 'E', type: 'text', value: `excelente.` },
    ],
    correct: 'C',
    explanation: `1ª divulgação — Rede A: 3000·10%·3% = 9 compradores; Rede B: 1000·30%·2% = 6; total 15. 2ª divulgação (visualizações proporcionais ao investimento): A recebe +R$300 (3×): 300/100·3000 = 9000 ⇒ 9000·10%·3% = 27; B recebe +R$300 (2,5×): 300/200·1000 = 1500 ⇒ 1500·30%·2% = 9; total 36. Aumento Q = (36 − 15)/15 = 1,4 = 140%, que está em 100% < Q ≤ 150%: bom. Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `A luminosidade L  de uma estrela está relacionada com 
o raio R  e com a temperatura T  dessa estrela segundo a 
Lei de Stefan-Boltzmann: L = c ⋅ R 2 ⋅ T 4 , em que c é uma 
constante igual para todas as estrelas. 
Disponível em: http://ciência.hsw.uol.com.br. Acesso em: 22 nov. 2013 (adaptado). 
Considere duas estrelas E e F , sendo que a estrela  E 
tem metade do raio da estrela F e o dobro da temperatura 
de F . 
Indique por L E e L F suas respectivas luminosidades. 
A relação entre as luminosidades dessas duas estrelas é 
dada por`,
    alternatives: [
      { id: 'A', type: 'text', value: `L_E = L_F/2` },
      { id: 'B', type: 'text', value: `L_E = L_F/4` },
      { id: 'C', type: 'text', value: `L_E = L_F` },
      { id: 'D', type: 'text', value: `L_E = 4·L_F` },
      { id: 'E', type: 'text', value: `L_E = 8·L_F` },
    ],
    correct: 'D',
    explanation: `Pela lei L = c·R²·T⁴, com R_E = R_F/2 e T_E = 2T_F: L_E = c·(R_F/2)²·(2T_F)⁴ = c·(R_F²/4)·(16T_F⁴) = 4·c·R_F²·T_F⁴ = 4L_F. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma das informações que pode auxiliar no 
dimensionamento do número de pediatras que devem 
atender em uma Unidade Básica de Saúde (UBS) é 
o número que representa a mediana da quantidade 
de crianças por família existente na região sob sua 
responsabilidade. O quadro mostra a distribuição das 
frequências do número de crianças por família na região 
de responsabilidade de uma UBS. 
 
O número que representa a mediana da quantidade de 
crianças por família nessa região é`,
    images: ['/enem/2022/images/enem_2022_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0.` },
      { id: 'B', type: 'text', value: `1,5.` },
      { id: 'C', type: 'text', value: `1,9.` },
      { id: 'D', type: 'text', value: `2,1.` },
      { id: 'E', type: 'text', value: `2,5.` },
    ],
    correct: 'B',
    explanation: `Total de famílias: 100+400+200+150+100+50 = 1000. A mediana é a média do 500º e do 501º valores. Acumulando: 0 crianças (1–100), 1 criança (101–500), 2 crianças (501–700). O 500º valor é 1 e o 501º é 2; mediana = (1+2)/2 = 1,5. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em jogos de voleibol, um saque é invalidado se a bola atingir o teto do ginásio onde ocorre o jogo. Um jogador de uma equipe tem um saque que atinge uma grande altura. Seu recorde foi quando a batida do saque se iniciou a uma altura de 1,5 m do piso da quadra, e a trajetória da bola foi descrita por uma parábola, em que y representa a altura da bola em relação ao eixo x (das abscissas), que está localizado a 1,5 m do piso da quadra. Suponha que em todas as partidas algum saque desse jogador atinja a mesma altura do seu recorde.
A equipe desse jogador participou de um torneio de voleibol no qual jogou cinco partidas, cada uma delas em um ginásio diferente. As alturas dos tetos desses ginásios, em relação aos pisos das quadras, são:
ginásio I: 17 m; ginásio II: 18 m; ginásio III: 19 m; ginásio IV: 21 m; ginásio V: 40 m.
O saque desse atleta foi invalidado`,
    images: ['/enem/2022/images/enem_2022_d2_q150.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `apenas no ginásio I.` },
      { id: 'B', type: 'text', value: `apenas nos ginásios I e II.` },
      { id: 'C', type: 'text', value: `apenas nos ginásios I, II e III.` },
      { id: 'D', type: 'text', value: `apenas nos ginásios I, II, III e IV.` },
      { id: 'E', type: 'text', value: `em todos os ginásios.` },
    
    ],
    correct: 'D',
    explanation: `Vértice da parábola y = −x²/6 − 7x/3 + 12: y_máx = 12 + (7/3)²/(4·1/6) = 12 + (49/9)/(2/3) = 12 + 49/6 = 121/6 ≈ 20,17. Como o eixo x está 1,5 m acima do piso, a altura máxima da bola é 121/6 + 1,5 = 65/3 ≈ 21,67 m. O saque é invalidado onde o teto é menor que 21,67 m: ginásios I (17), II (18), III (19) e IV (21); é válido no V (40). Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um médico faz o acompanhamento clínico de um grupo de pessoas que realizam atividades físicas diariamente. 
Ele observou que a perda média de massa dessas pessoas para cada hora de atividade física era de 1,5 kg. Sabendo 
que a massa de 1 L de água é de 1 kg, ele recomendou que ingerissem, ao longo das 3 horas seguintes ao final da 
atividade, uma quantidade total de água correspondente a 40% a mais do que a massa perdida na atividade física, 
para evitar desidratação. 
Seguindo a recomendação médica, uma dessas pessoas ingeriu, certo dia, um total de 1,7 L de água após 
terminar seus exercícios físicos. 
Para que a recomendação médica tenha efetivamente sido respeitada, a atividade física dessa pessoa, nesse dia, durou`,
    alternatives: [
      { id: 'A', type: 'text', value: `30 minutos ou menos.` },
      { id: 'B', type: 'text', value: `mais de 35 e menos de 45 minutos.` },
      { id: 'C', type: 'text', value: `mais de 45 e menos de 55 minutos.` },
      { id: 'D', type: 'text', value: `mais de 60 e menos de 70 minutos.` },
      { id: 'E', type: 'text', value: `70 minutos ou mais.` },
    ],
    correct: 'C',
    explanation: `A água ingerida, 1,7 L = 1,7 kg, corresponde a 140% da massa perdida. Massa perdida = 1,7/1,4 ≈ 1,214 kg. Tempo = massa perdida ÷ 1,5 kg/h = 1,214/1,5 ≈ 0,81 h ≈ 48,6 min, que está entre 45 e 55 minutos. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em uma sala de cinema, para garantir que os espectadores vejam
toda a imagem projetada na tela, a disposição das poltronas
deve obedecer à norma técnica da Associação Brasileira de
Normas Técnicas (ABNT), que faz as seguintes indicações: •
Distância mínima ( D min ) entre a tela de projeção e o
encosto da poltrona da primeira fileira deve ser de, pelo
menos, 60% da largura ( L ) da tela. • Distância máxima ( D
max ) entre a tela de projeção e o encosto da poltrona da
última fileira deve ser o dobro da largura ( L ) da tela,
sendo aceitável uma distância de até 2,9 vezes a largura ( L )
da tela. Para o espaçamento entre as fileiras de poltronas, é
considerada a distância de 1 metro entre os encostos de
poltronas em duas fileiras consecutivas. Disponível em:
www.ctav.gov.br. Acesso em: 14 nov. 2013. Uma sala de cinema,
cuja largura da tela mede 12 m, está montada em conformidade
com as normas da ABNT e tem suas dimensões especificadas na
figura. Área de instalação de novas poltronas D 2,9 L
aceitável = D 2 L = max D 0,6 L min = L Tela Pretende-se
ampliar essa sala, mantendo-se na mesma posição a tela e todas
as poltronas ja instaladas, ampliando-se ao máximo a sala para
os fundos (área de instalação de novas poltronas),
respeitando-se o limite aceitável da norma da ABNT. A intenção
é aumentar, ao máximo, a quantidade de poltronas da sala,
instalando-se novas unidades, iguais às já instaladas. Quantas
fileiras de poltronas a sala comportará após essa ampliação?`,
    images: ['/enem/2022/images/enem_2022_d2_q152.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `26` },
      { id: 'B', type: 'text', value: `27` },
      { id: 'C', type: 'text', value: `28` },
      { id: 'D', type: 'text', value: `29` },
      { id: 'E', type: 'text', value: `35` },
    ],
    correct: 'C',
    explanation: `L = 12 m. D_mín = 0,6·12 = 7,2 m (1ª fileira) e D_aceitável = 2,9·12 = 34,8 m (última fileira). Com 1 m entre fileiras consecutivas, o número de fileiras é (34,8 − 7,2)/1 + 1 = 27 + 1 = 28. Resposta: C.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma empresa produz e vende um tipo de chocolate, 
maciço, em formato de cone circular reto com as medidas 
do diâmetro da base e da altura iguais a 8 cm e 10 cm, 
respectivamente, como apresenta a figura. 
8 cm 
10 cm 
Devido a um aumento de preço dos ingredientes 
utilizados na produção desse chocolate, a empresa 
decide produzir esse mesmo tipo de chocolate com um 
volume 19% menor, no mesmo formato de cone circular 
reto com altura de 10 cm. 
Para isso, a empresa produzirá esses novos chocolates 
com medida do raio da base, em centímetro, igual a`,
    images: ['/enem/2022/images/enem_2022_d2_q153.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,52.` },
      { id: 'B', type: 'text', value: `3,24.` },
      { id: 'C', type: 'text', value: `3,60.` },
      { id: 'D', type: 'text', value: `6,48.` },
      { id: 'E', type: 'text', value: `7,20.` },
    ],
    correct: 'C',
    explanation: `Volume original: V = (1/3)π·4²·10. O novo cone (mesma altura 10, volume 19% menor): (1/3)π·r²·10 = 0,81·(1/3)π·16·10 ⇒ r² = 0,81·16 = 12,96 ⇒ r = 3,6 cm. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em janeiro de 2013, foram declaradas 1 794 272 
admissões e 1 765 372 desligamentos no Brasil, ou seja, 
foram criadas 28 900 vagas de emprego, segundo dados 
do Cadastro Geral de Empregados e Desempregados 
(Caged), divulgados pelo Ministério do Trabalho e 
Emprego (MTE). Segundo o Caged, o número de vagas 
criadas em janeiro de 2013 sofreu uma queda de 75%, 
quando comparado com o mesmo período de 2012. 
Disponível em: http://portal.mte.gov.br. Acesso em: 23 fev. 2013 (adaptado). 
De acordo com as informações dadas, o número de 
vagas criadas em janeiro de 2012 foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `16 514.` },
      { id: 'B', type: 'text', value: `86 700.` },
      { id: 'C', type: 'text', value: `115 600.` },
      { id: 'D', type: 'text', value: `441 343.` },
      { id: 'E', type: 'text', value: `448 568.` },
    ],
    correct: 'C',
    explanation: `As 28 900 vagas de 2013 representam uma queda de 75% em relação a 2012, ou seja, 25% do valor de 2012. Logo 2012 = 28 900 ÷ 0,25 = 115 600. Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um prédio, com 9 andares e 8 apartamentos de 2 quartos por
andar, está com todos os seus apartamentos à venda. Os
apartamentos são identificados por números formados por dois
algarismos, sendo que a dezena indica o andar onde se encontra
o apartamento, e a unidade, um algarismo de 1 a 8, que
diferencia os apartamentos de um mesmo andar. Quanto à
incidência de sol nos quartos desses apartamentos,
constatam-se as seguintes características, em função de seus
números de identificação: • naqueles que finalizam em 1 ou 2,
ambos os quartos recebem sol apenas na parte da manhã; •
naqueles que finalizam em 3, 4, 5 ou 6, apenas um dos quartos
recebe sol na parte da manhã; • naqueles que finalizam em 7 ou
8, ambos os quartos recebem sol apenas na parte da tarde. Uma
pessoa pretende comprar 2 desses apartamentos em um mesmo
andar, mas quer que, em ambos, pelo menos um dos quartos
receba sol na parte da manhã. De quantas maneiras diferentes
essa pessoa poderá escolher 2 desses apartamentos para compra
nas condições desejadas?`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q155_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q155_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q155_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q155_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q155_E.jpg` },
    ],
    correct: 'B',
    explanation: `Em cada andar, os apartamentos com ao menos um quarto recebendo sol de manhã são os de final 1, 2, 3, 4, 5 ou 6 (os de final 7 e 8 só recebem à tarde): 6 apartamentos. Escolher 2 deles: C(6,2) = 6!/((6−2)!·2!) = 15. Em 9 andares: 9·15 = 135. A expressão é 9·6!/((6−2)!·2!). Resposta: B.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O professor de artes orientou seus estudantes a realizarem a
seguinte sequência de atividades: • Dobrar uma folha de papel
em formato quadrado duas vezes, em sequência, ao longo das
linhas tracejadas, conforme ilustrado nas figuras 1 e 2, para
obter o papel dobrado, conforme Figura 3. O   Figura 1
Figura 2 Figura 3 • Em seguida, no papel dobrado da Figura 3,
considerar o ponto R , sobre o segmento OM , sendo M o ponto
médio do lado do quadrado original, de modo que OR = 1 4 OM ,
traçar um arco de circunferência de raio medindo 1 2 OM com
centro no ponto R , obtendo a Figura 4. Por último, recortar o
papel ao longo do arco de circunferência e excluir a parte que
contém o setor circular, obtendo o papel dobrado, conforme
Figura 5. R O M ⇒ Figura 4 Figura 5 Após desdobrado o papel
que restou na Figura 5, a figura plana que os estudantes
obterão será`,
    images: ['/enem/2022/images/enem_2022_d2_q156_1.jpg', '/enem/2022/images/enem_2022_d2_q156_2.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q156_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q156_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q156_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q156_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q156_E.jpg` },
    ],
    correct: 'C',
    explanation: `Dobrando o quadrado duas vezes obtém-se um triângulo (um quarto do quadrado) com O no centro do quadrado. O corte em arco de raio OM/2 centrado em R (com OR = OM/4) remove uma reentrância arredondada. Ao desdobrar, a simetria das duas dobras replica esse recorte, produzindo uma figura de contorno ondulado com quatro reentrâncias. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O funcionário de uma loja tem seu salário mensal formado por uma parcela fixa de 675 reais mais uma comissão 
que depende da quantidade de peças vendidas por ele no mês. O cálculo do valor dessa comissão é feito de acordo 
com estes critérios: 
• até a quinquagésima peça vendida, paga-se 5 reais por peça; 
• a partir da quinquagésima primeira peça vendida, o valor pago e de 7 reais por peça. 
Represente por q a quantidade de peças vendidas no mês por esse funcionário, e por S ( q ) o seu salário mensal, 
em real, nesse mês. 
A expressão algébrica que descreve S ( q ) em função de q é`,
    alternatives: [
      { id: 'A', type: 'text', value: `S ( q ) = 675 + 12 q` },
      { id: 'B', type: 'text', value: `S ( q ) = 325 + 12 q` },
      { id: 'C', type: 'text', value: `S ( q ) = 675 + 7 q` },
      { id: 'D', type: 'text', value: `S(q) = 625 + 5q, se q ≤ 50; 925 + 7q, se q > 50` },
      { id: 'E', type: 'text', value: `S(q) = 625 + 5q, se q ≤ 50; 575 + 7q, se q > 50` },
    ],
    correct: 'A',
    annulled: true,
    explanation: `Questão ANULADA. Cálculo correto: para q ≤ 50, S(q) = 675 + 5q; para q > 50, S(q) = 675 + 5·50 + 7(q − 50) = 575 + 7q. Nenhuma alternativa traz 675 + 5q no primeiro ramo (a letra E traz 625 + 5q), de modo que não há resposta correta e a questão foi anulada.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Ao analisar os dados de uma epidemia em uma cidade, peritos obtiveram um modelo que avalia a quantidade de 
pessoas infectadas a cada mês, ao longo de um ano. O modelo é dado por p ( t ) = − t 2 + 10 t + 24, sendo t um número 
natural, variando de 1 a 12, que representa os meses do ano, e p ( t ) a quantidade de pessoas infectadas no mês t do 
ano. Para tentar diminuir o número de infectados no próximo ano, a Secretaria Municipal de Saúde decidiu intensificar 
a propaganda oficial sobre os cuidados com a epidemia. Foram apresentadas cinco propostas (I, II, III, IV e V), 
com diferentes períodos de intensificação das propagandas: 
• I: 1 ≤ t ≤ 2; 
• II: 3 ≤ t ≤ 4; 
• III: 5 ≤ t ≤ 6; 
• IV: 7 ≤ t ≤ 9;  
• V: 10 ≤ t ≤ 12. 
A sugestão dos peritos é que seja escolhida a proposta cujo período de intensificação da propaganda englobe o 
mês em que, segundo o modelo, há a maior quantidade de infectados. A sugestão foi aceita. 
A proposta escolhida foi a`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'C',
    explanation: `p(t) = −t² + 10t + 24 é parábola com máximo no vértice t = −b/2a = −10/(−2) = 5. O maior número de infectados ocorre em t = 5, mês incluído no período da proposta III (5 ≤ t ≤ 6). Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um atleta iniciou seu treinamento visando as competições de fim de ano. Seu treinamento consiste em cinco tipos 
diferentes de treinos: treino T 1 , treino T 2 , treino T 3 , treino T 4 e treino T 5 . A sequência dos treinamentos deve seguir esta ordem: 
A letra R significa repouso. Após completar a sequência de treinamentos, o atleta começa novamente a sequência a 
partir do treino T 1 e segue a ordem descrita. Após 24 semanas completas de treinamento, se dará o início das competições. 
A sequência de treinamentos que o atleta realizará na 24ª semana de treinos e`,
    images: ['/enem/2022/images/enem_2022_d2_q159.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `T 3   R  T 4   R  R  T 5   R.` },
      { id: 'B', type: 'text', value: `R  T 3   R  T 4   R  R  T 5 .` },
      { id: 'C', type: 'text', value: `R  T 4   R  R  T 5  R  T 1 .` },
      { id: 'D', type: 'text', value: `R  R  T 5   R  T 1   R  R.` },
      { id: 'E', type: 'text', value: `R  T 5   R  T 1   R  R  T 2 .` },
    ],
    correct: 'B',
    explanation: `A sequência tem período de 13 dias (T1, R, R, T2, R, R, T3, R, T4, R, R, T5, R) e depois recomeça. A 24ª semana vai do dia 162 ao 168. Posição no ciclo = ((dia−1) mod 13) + 1: dia 162→R, 163→T3, 164→R, 165→T4, 166→R, 167→R, 168→T5. Logo: R, T3, R, T4, R, R, T5. Resposta: B.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um robô, que tem um ímã em sua base, se desloca 
sobre a superfície externa de um cubo metálico, ao longo de 
segmentos de reta cujas extremidades são pontos médios de 
arestas e centros de faces. Ele inicia seu deslocamento no 
ponto P , centro da face superior do cubo, segue para o centro 
da próxima face, converte à esquerda e segue para o centro da 
face seguinte, converte à direita e continua sua movimentação, 
sempre alternando entre conversões à esquerda e à direita 
quando alcança o centro de uma face. O robô só termina sua 
movimentação quando retorna ao ponto P . A figura apresenta 
os deslocamentos iniciais desse robô. 
P 
A projeção ortogonal do trajeto descrito por esse robô 
sobre o plano da base, após terminada sua movimentação, 
visualizada da posição em que se está enxergando esse 
cubo, é`,
    images: ['/enem/2022/images/enem_2022_d2_q160.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q160_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q160_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q160_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q160_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q160_E.jpg` },
    ],
    correct: 'A',
    explanation: `Projetando ortogonalmente o trajeto do robô sobre o plano da base: os segmentos sobre as faces superior e inferior aparecem em verdadeira grandeza e os das faces laterais caem sobre as arestas da base. O trajeto fechado, visto de cima, corresponde ao desenho da alternativa A. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma empresa de engenharia projetou uma casa com a forma de um
retângulo para um de seus clientes. Esse cliente solicitou a
inclusão de uma varanda em forma de L. A figura apresenta a
planta baixa desenhada pela empresa, já com a varanda
incluída, cujas medidas, indicadas em centímetro, representam
os valores das dimensões da varanda na escala de 1 : 50. 16 cm
VARANDA 5 cm BANHO SOCIAL BANHO SUÍTE COZINHA SUÍTE 18,4 cm
SALA QUARTO QUARTO 4 cm ESCALA 1 : 50 A medida real da área da
varanda, em metro quadrado, é`,
    images: ['/enem/2022/images/enem_2022_d2_q161.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `33,40.` },
      { id: 'B', type: 'text', value: `66,80.` },
      { id: 'C', type: 'text', value: `89,24.` },
      { id: 'D', type: 'text', value: `133,60.` },
      { id: 'E', type: 'text', value: `534,40.` },
    ],
    correct: 'A',
    explanation: `A varanda em L, na planta, é a união de um retângulo 16 × 5 (= 80 cm²) com um retângulo 4 × 18,4 (= 73,6 cm²), descontada a sobreposição no canto 4 × 5 = 20 cm²: 80 + 73,6 − 20 = 133,6 cm². Na escala 1:50, 1 cm² da planta equivale a 50² cm² = 2500 cm² = 0,25 m². Área real = 133,6 · 0,25 = 33,4 m². Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma loja de roupas fixou uma meta de vendas de 77 000 reais
para um determinado mês de 30 dias. O gráfico mostra o volume
de vendas dessa loja, em real, nos dez primeiros dias do mês e
entre o dia dez e o dia vinte desse mês, nos seus dois únicos
setores (infantil e adulto). Suponha que a variação no volume
de vendas, para o período registrado, tenha se dado de forma
linear, como mostrado no gráfico, e que essa tendência se
mantenha a mesma para os próximos dez dias. 18 000 15 000
Adulto 8 000 7 000 Infantil 10 30 20 Dias Ao final do
trigésimo dia, quanto faltará no volume de vendas, em real,
para que a meta fixada para o mês seja alcançada?`,
    images: ['/enem/2022/images/enem_2022_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5 000` },
      { id: 'B', type: 'text', value: `7 000` },
      { id: 'C', type: 'text', value: `11 000` },
      { id: 'D', type: 'text', value: `18 000` },
      { id: 'E', type: 'text', value: `29 000` },
    ],
    correct: 'C',
    explanation: `Cada ponto do gráfico dá o volume de vendas de um período de 10 dias, com variação linear. Adulto: 18 000 (1º), 15 000 (2º), projetando 12 000 (3º). Infantil: 8 000, 7 000 e 6 000. Total do mês = (18 000+15 000+12 000) + (8 000+7 000+6 000) = 45 000 + 21 000 = 66 000. Faltam 77 000 − 66 000 = 11 000. Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em uma universidade, atuam professores que estão 
enquadrados funcionalmente pela sua maior titulação: 
mestre ou doutor. Nela há, atualmente, 60 mestres e 
40 doutores. Os salários mensais dos professores mestres 
e dos doutores são, respectivamente, R$ 8 000,00 e 
R$ 12 000,00. 
A diretoria da instituição pretende proporcionar um 
aumento salarial diferenciado para o ano seguinte, de tal 
forma que o salário médio mensal dos professores dessa 
instituição não ultrapasse R$ 12 240,00. A universidade já 
estabeleceu que o aumento salarial será de 25% para os 
mestres e precisa ainda definir o percentual de reajuste 
para os doutores. 
Mantido o número atual de professores com suas atuais 
titulações, o aumento salarial, em porcentagem, a ser 
concedido aos doutores deverá ser de, no máximo,`,
    alternatives: [
      { id: 'A', type: 'text', value: `14,4.` },
      { id: 'B', type: 'text', value: `20,7.` },
      { id: 'C', type: 'text', value: `22,0.` },
      { id: 'D', type: 'text', value: `30,0.` },
      { id: 'E', type: 'text', value: `37,5.` },
    ],
    correct: 'D',
    explanation: `Mestres: 60 × 8000 = 480 000, com +25% → 600 000. Doutores: 40 × 12 000 = 480 000, com reajuste x. Para média ≤ 12 240 entre 100 professores: (600 000 + 480 000(1+x))/100 ≤ 12 240 ⇒ 480 000(1+x) ≤ 624 000 ⇒ 1+x ≤ 1,30 ⇒ x ≤ 30%. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um borrifador de atuação automática libera, a cada 
acionamento, uma mesma quantidade de inseticida. 
O recipiente desse produto, quando cheio, contém 360 mL 
de inseticida, que duram 60 dias se o borrifador permanecer 
ligado ininterruptamente e for acionado a cada 48 minutos. 
A quantidade de inseticida que é liberada a cada 
acionamento do borrifador, em mililitro, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,125.` },
      { id: 'B', type: 'text', value: `0,200.` },
      { id: 'C', type: 'text', value: `4,800.` },
      { id: 'D', type: 'text', value: `6,000.` },
      { id: 'E', type: 'text', value: `12,000.` },
    ],
    correct: 'B',
    explanation: `Em 60 dias ligado continuamente, acionando a cada 48 min: nº de acionamentos = (60·24·60)/48 = 86 400/48 = 1800. Por acionamento: 360/1800 = 0,2 mL. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Definem-se o dia e o ano de um planeta de um sistema solar 
como sendo, respectivamente, o tempo que o planeta leva para 
dar 1 volta completa em torno de seu próprio eixo de rotação e o 
tempo para dar 1 volta completa em torno de seu Sol. 
Suponha que exista um planeta Z, em algum sistema 
solar, onde um dia corresponda a 73 dias terrestres e 
que 2 de seus anos correspondam a 1 ano terrestre. 
Considere que 1 ano terrestre tem 365 de seus dias. 
No planeta Z, seu ano corresponderia a quantos de seus 
dias?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,5` },
      { id: 'B', type: 'text', value: `10,0` },
      { id: 'C', type: 'text', value: `730,0` },
      { id: 'D', type: 'text', value: `13 322,5` },
      { id: 'E', type: 'text', value: `53 290,0` },
    ],
    correct: 'A',
    explanation: `2 anos do planeta Z = 1 ano terrestre, então 1 ano de Z = 182,5 dias terrestres. Como 1 dia de Z = 73 dias terrestres, o ano de Z medido em seus próprios dias = 182,5/73 = 2,5 dias. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em uma competição de velocidade, diz-se que há uma
ultrapassagem quando um veículo que está atrás de outro passa
à sua frente, com ambos se deslocando no mesmo sentido.
Considere uma competição automobilística entre cinco carros em
uma pista com 100 m de comprimento, onde todos largam no mesmo
instante e da mesma linha. O gráfico mostra a variação da
distância percorrida por cada veículo, em função do tempo,
durante toda a competição. 100 Distância (m) 0 0 Tempo (s) 15
Qual o número de ultrapassagens, após o início da competição,
efetuadas pelo veículo que chegou em último lugar?`,
    images: ['/enem/2022/images/enem_2022_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `1` },
      { id: 'C', type: 'text', value: `2` },
      { id: 'D', type: 'text', value: `3` },
      { id: 'E', type: 'text', value: `4` },
    ],
    correct: 'A',
    explanation: `No gráfico distância × tempo, o veículo que chega em último lugar tem curva que permanece sempre atrás das demais — nunca passa à frente de outro carro. Portanto não efetua nenhuma ultrapassagem. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Em uma loja, o preço promocional de uma geladeira 
é de R$ 1 000,00 para pagamento somente em dinheiro. 
Seu preço normal, fora da promoção, é 10% maior. Para 
pagamento feito com o cartão de crédito da loja, é dado 
um desconto de 2% sobre o preço normal. 
Uma cliente decidiu comprar essa geladeira, optando 
pelo pagamento com o cartão de crédito da loja. Ela 
cálculou que o valor a ser pago seria o preço promocional 
acrescido de 8%. Ao ser informada pela loja do valor a 
pagar, segundo sua opção, percebeu uma diferença entre 
seu cálculo e o valor que lhe foi apresentado. 
O valor apresentado pela loja, comparado ao valor 
calculado pela cliente, foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 2,00 menor.` },
      { id: 'B', type: 'text', value: `R$ 100,00 menor.` },
      { id: 'C', type: 'text', value: `R$ 200,00 menor.` },
      { id: 'D', type: 'text', value: `R$ 42,00 maior.` },
      { id: 'E', type: 'text', value: `R$ 80,00 maior.` },
    ],
    correct: 'A',
    explanation: `Preço normal = 1000·1,10 = 1100. No cartão (2% de desconto sobre o normal): 1100·0,98 = 1078. A cliente cálculou 1000·1,08 = 1080. O valor da loja (1078) é R$ 2,00 menor que o calculado (1080). Resposta: A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma pessoa precisa se deslocar de automóvel do 
ponto P para o ponto Q , indicados na figura, na qual as 
linhas verticais e horizontais simbolizam ruas. 
Q 
P 
Por causa do sentido de tráfego nessas ruas, o 
caminho poligonal destacado é a possibilidade mais 
curta de efetuar esse deslocamento. Para descrevê-lo, 
deve-se especificar qual o sentido a ser tomado em cada 
cruzamento de ruas, em relação à direção de deslocamento 
do automóvel, que se movimentará continuamente. 
Para isso, empregam-se as letras E, F e D para indicar 
“vire à esquerda”, “siga em frente” e “vire à direita”, 
respectivamente. 
A sequência de letras que descreve o caminho poligonal 
destacado é`,
    images: ['/enem/2022/images/enem_2022_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `DDEFDDEEFFD.` },
      { id: 'B', type: 'text', value: `DFEFDDDEFFD.` },
      { id: 'C', type: 'text', value: `DFEFDDEEFFD.` },
      { id: 'D', type: 'text', value: `EFDFEEDDFFE.` },
      { id: 'E', type: 'text', value: `EFDFEEEDFFE.` },
    ],
    correct: 'C',
    explanation: `Percorrendo o caminho poligonal destacado de P a Q, com o automóvel em movimento contínuo e aplicando em cada cruzamento D (direita), F (frente) ou E (esquerda) conforme a mudança de direção, obtém-se a sequência DFEFDDEEFFD. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma loja comercializa cinco modelos de caixas-d’água (I, II,
III, IV e V), todos em formato de cilindro reto de base
circular. Os modelos II, III, IV e V têm as especificações de
suas dimensões dadas em relação às dimensões do modelo I, cuja
profundidade é P e área da base é A b , como segue: • modelo
II: o dobro da profundidade e a metade da área da base do
modelo I; • modelo III: o dobro da profundidade e a metade do
raio da base do modelo I; • modelo IV: a metade da
profundidade e o dobro da área da base do modelo I; • modelo
V: a metade da profundidade e o dobro do raio da base do
modelo I. Uma pessoa pretende comprar nessa loja o modelo de
caixa-d’água que ofereça a maior capacidade volumétrica. O
modelo escolhido deve ser o`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'E',
    explanation: `Volume do cilindro = área da base × profundidade. Tomando V_I = A_b·P: II = (A_b/2)·2P = A_b·P; III = (A_b/4)·2P = A_b·P/2; IV = 2A_b·(P/2) = A_b·P; V = 4A_b·(P/2) = 2A_b·P (dobrar o raio quadruplica a área da base). O maior volume é o do modelo V. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: ``,
    images: ['/enem/2022/images/enem_2022_d2_q170.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2005` },
      { id: 'B', type: 'text', value: `2007` },
      { id: 'C', type: 'text', value: `2009` },
      { id: 'D', type: 'text', value: `2011` },
      { id: 'E', type: 'text', value: `2013` },
    ],
    correct: 'B',
    explanation: `Rentabilidade = aluguel/valor de mercado: 2005: 630/90 000 ≈ 0,0070; 2007: 960/120 000 = 0,0080; 2009: 1350/270 000 = 0,0050; 2011: 1800/450 000 = 0,0040; 2013: 3240/540 000 = 0,0060. O maior valor ocorre em 2007. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Nos cinco jogos finais da última temporada, com 
uma média de 18 pontos por jogo, um jogador foi eleito o 
melhor do campeonato de basquete. Na atual temporada, 
cinco jogadores têm a chance de igualar ou melhorar 
essa média. No quadro estão registradas as pontuações 
desses cinco jogadores nos quatro primeiros jogos das 
finais deste ano. 
 
O quinto e último jogo será realizado para decidir a 
equipe campeã e qual o melhor jogador da temporada. 
O jogador que precisa fazer a menor quantidade de 
pontos no quinto jogo, para igualar a média de pontos do 
melhor jogador da temporada passada, é o`,
    images: ['/enem/2022/images/enem_2022_d2_q171.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'A',
    explanation: `Média 18 em 5 jogos ⇒ 90 pontos no total. Somas dos 4 primeiros jogos: I = 77, II = 71, III = 71, IV = 75, V = 75. Pontos necessários no 5º jogo: I = 13, II = 19, III = 19, IV = 15, V = 15. O menor é 13 (jogador I). Resposta: A.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Um casal planeja construir em sua chácara uma 
piscina com o formato de um paralelepípedo reto 
retângulo com capacidade para 90 000 L de água. 
O casal contratou uma empresa de construções que 
apresentou cinco projetos com diferentes combinações 
nas dimensões internas de profundidade, largura 
e comprimento. A piscina a ser construída terá 
revestimento interno em suas paredes e fundo com uma 
mesma cerâmica, e o casal irá escolher o projeto que 
exija a menor área de revestimento. 
As dimensões internas de profundidade, largura 
e comprimento, respectivamente, para cada um dos 
projetos, são: 
• projeto I: 1,8 m, 2,0 m e 25,0 m; 
• projeto II: 2,0 m, 5,0 m e 9,0 m; 
• projeto III: 1,0 m, 6,0 m e 15,0 m; 
• projeto IV: 1,5 m, 15,0 m e 4,0 m; 
• projeto V: 2,5 m, 3,0 m e 12,0 m. 
O projeto que o casal deverá escolher será o`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'B',
    explanation: `Volume = 90 m³ em todos. Área de revestimento = fundo (L·C) + paredes (2·P·L + 2·P·C): I: 50+7,2+90 = 147,2; II: 45+20+36 = 101; III: 90+12+30 = 132; IV: 60+45+12 = 117; V: 36+15+60 = 111. A menor área é a do projeto II. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma instituição de ensino superior ofereceu vagas 
em um processo seletivo de acesso a seus cursos. 
Finalizadas as inscrições, foi divulgada a relação do 
número de candidatos por vaga em cada um dos cursos 
oferecidos. Esses dados são apresentados no quadro. 
 
Qual foi o número total de candidatos inscritos nesse 
processo seletivo?`,
    images: ['/enem/2022/images/enem_2022_d2_q173.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `200` },
      { id: 'B', type: 'text', value: `400` },
      { id: 'C', type: 'text', value: `1 200` },
      { id: 'D', type: 'text', value: `1 235` },
      { id: 'E', type: 'text', value: `7 200` },
    ],
    correct: 'D',
    explanation: `Candidatos = vagas × (candidatos/vaga): Adm 30·6=180; C. Contábeis 40·6=240; Eng. Elétrica 50·7=350; História 30·8=240; Letras 25·4=100; Pedagogia 25·5=125. Total = 180+240+350+240+100+125 = 1235. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Peças metálicas de aeronaves abandonadas em 
aeroportos serão recicladas. Uma dessas peças é 
maciça e tem o formato cilíndrico, com a medida do raio 
da base igual a 4 cm e a da altura igual a 50 cm. Ela será 
derretida, e o volume de metal resultante será utilizado 
para a fabricação de esferas maciças com diâmetro de 
1 cm, a serem usadas para confeccionar rolamentos. 
Para estimar a quantidade de esferas que poderão ser 
produzidas a partir de cada uma das peças cilíndricas, 
admite-se que não ocorre perda de material durante o 
processo de derretimento. 
Quantas dessas esferas poderão ser obtidas a partir de 
cada peça cilíndrica?`,
    alternatives: [
      { id: 'A', type: 'text', value: `800` },
      { id: 'B', type: 'text', value: `1 200` },
      { id: 'C', type: 'text', value: `2 400` },
      { id: 'D', type: 'text', value: `4 800` },
      { id: 'E', type: 'text', value: `6 400` },
    ],
    correct: 'D',
    explanation: `Volume do cilindro = π·4²·50 = 800π cm³. Cada esfera (diâmetro 1 ⇒ raio 0,5): (4/3)π·(0,5)³ = π/6 cm³. Quantidade = 800π ÷ (π/6) = 4800. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Ao escutar a notícia de que um filme recém-lançado 
arrecadou, no primeiro mês de lançamento, R$ 1,35 bilhão 
em bilheteria, um estudante escreveu corretamente o 
número que representa essa quantia, com todos os seus 
algarismos. 
O número escrito pelo estudante foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `135 000,00.` },
      { id: 'B', type: 'text', value: `1 350 000,00.` },
      { id: 'C', type: 'text', value: `13 500 000,00.` },
      { id: 'D', type: 'text', value: `135 000 000,00.` },
      { id: 'E', type: 'text', value: `1 350 000 000,00.` },
    ],
    correct: 'E',
    explanation: `R$ 1,35 bilhão = 1,35 × 10⁹ = 1 350 000 000,00. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `O governo de um estado pretende realizar uma obra de
infraestrutura para auxiliar na integração e no processo de
escoamento da produção agrícola de duas cidades. O projeto
consiste na interligação direta das cidades A e B com a
Rodovia 003, pela construção das Rodovias 001 e 002. As duas
rodovias serão construídas em linha reta e deverão se conectar
à Rodovia 003 em um mesmo ponto, conforme esboço apresentado
na figura, na qual estão também indicadas as posições das
cidades A e B, considerando o eixo x posicionado sobre a
Rodovia 003, e cinco localizações sugeridas para o ponto de
conexão entre as três rodovias. 40 y (km) Cidade A Rodovia 001
Rodovia 002 30 Cidade B 20 10 I II III IV V Rodovia 003 0 5 10
15 20 25 30 35 40 45 50 55 x (km) Pretende-se que a distância
percorrida entre as duas cidades, pelas Rodovias 001 e 002,
passando pelo ponto de conexão, seja a menor possível. Dadas
as exigências do projeto, qual das localizações sugeridas deve
ser a escolhida para o ponto de conexão?`,
    images: ['/enem/2022/images/enem_2022_d2_q176.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'D',
    explanation: `Minimizar AP + PB com P sobre o eixo x equivale a refletir A(20, 40) no eixo, obtendo A'(20, −40), e ligar A' a B(50, 20) por reta. A reta A'B tem inclinação (20−(−40))/(50−20) = 2 e corta o eixo x (y = 0) em 0 = 2(x − 50) + 20 ⇒ x = 40. O ponto está em x = 40, localização IV. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma pessoa precisa contratar um operário para 
fazer um serviço em sua casa. Para isso, ela postou um 
anúncio em uma rede social. 
Cinco pessoas responderam informando preços por 
hora trabalhada, gasto diário com transporte e tempo 
necessário para conclusão do serviço, conforme valores 
apresentados no quadro. 
 
Se a pessoa pretende gastar o mínimo possível com essa 
contratação, irá contratar o operário`,
    images: ['/enem/2022/images/enem_2022_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'A',
    explanation: `Custo total = preço/hora × horas + transporte diário. I: 120·8 + 0 = 960; II: 180·6 + 0 = 1080; III: 170·6 + 20 = 1040; IV: 110·9 + 10 = 1000; V: 110·10 + 0 = 1100. O menor custo é o do operário I (960). Resposta: A.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Uma cozinheira produz docinhos especiais por 
encomenda. Usando uma receita-base de massa, ela 
prepara uma porção, com a qual produz 50 docinhos 
maciços de formato esférico, com 2 cm de diâmetro. 
Um cliente encomenda 150 desses docinhos, mas pede 
que cada um tenha formato esférico com 4 cm de diâmetro. 
A cozinheira pretende preparar o número exato de 
porções da receita-base de massa necessário para 
produzir os docinhos dessa encomenda. 
Quantas porções da receita-base de massa ela deve 
preparar para atender esse cliente?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `3` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `12` },
      { id: 'E', type: 'text', value: `24` },
    ],
    correct: 'E',
    explanation: `Uma porção produz 50 esferas de 2 cm (raio 1): volume por porção = 50·(4/3)π·1³ = 200π/3. Encomenda: 150 docinhos de 4 cm (raio 2): volume = 150·(4/3)π·2³ = 1600π. Nº de porções = 1600π ÷ (200π/3) = 1600·3/200 = 24. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: ``,
    images: ['/enem/2022/images/enem_2022_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `74,23.` },
      { id: 'B', type: 'text', value: `74,51.` },
      { id: 'C', type: 'text', value: `75,07.` },
      { id: 'D', type: 'text', value: `75,23.` },
      { id: 'E', type: 'text', value: `78,49.` },
    ],
    correct: 'B',
    explanation: `Pela regra, cada valor é a média dos vizinhos. Com 2012 = 73,95 e 2013 = 74,23: 2013 = (2012 + 2014)/2 ⇒ 74,23 = (73,95 + x)/2 ⇒ x = 2·74,23 − 73,95 = 74,51. Resposta: B.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2022,
    day: 2,
    text: `Na figura estão destacadas duas trajetórias sobre a superfície
do globo terrestre, descritas ao se percorrer parte dos
meridianos 1, 2 e da Linha do Equador, sendo que os meridianos
1 e 2 estão contidos em planos perpendiculares entre si. O
plano α é paralelo ao que contém a Linha do Equador. N
Meridiano 2 Meridiano 1 Linha do Equador S α A vista superior
da projeção ortogonal sobre o plano α dessas duas trajetórias
é`,
    images: ['/enem/2022/images/enem_2022_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2022/images/enem_2022_d2_q180_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2022/images/enem_2022_d2_q180_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2022/images/enem_2022_d2_q180_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2022/images/enem_2022_d2_q180_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2022/images/enem_2022_d2_q180_E.jpg` },
    ],
    correct: 'E',
    explanation: `Os meridianos estão em planos verticais (contendo o eixo N–S); projetados ortogonalmente sobre o plano horizontal α, cada arco de meridiano vira um segmento reto (raio) e, como os meridianos 1 e 2 são perpendiculares, geram raios perpendiculares. O arco da Linha do Equador, paralelo a α, projeta-se como arco de circunferência em verdadeira grandeza. A composição das duas trajetórias corresponde à alternativa E. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
];

export default ENEM_2022_D2;
