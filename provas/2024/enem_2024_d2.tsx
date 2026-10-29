import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2024_D2: QuizQuestion[] = [
 {
 id: 91,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Muitas pessoas ainda se espantam com o fato de um 
passageiro sair ileso de um acidente de carro enquanto 
o veículo onde estava teve perda total. Essas pessoas 
talvez considerem, equivocadamente, que os carros mais 
seguros são os que têm as estruturas mais rígidas, ou seja, 
estruturas, que durante uma colisão, apresentam menor 
deformação. Na verdade, o que ocorre é o contrário. Por isso, 
a partir de 1958, passaram a ser produzidos carros com partes 
que se deformam facilmente. 
DAY, C. Crumple Zones . Disponível em: https://pubs.aip.org. 
Acesso em: 2 jul. 2024 (adaptado). 
Assim, além dos cintos de segurança e dos airbags, 
os carros modernos passaram a contar com o dispositivo 
de segurança conhecido como crumple zone (região 
deformável, em inglês), conforme a figura. 
Momentum and Car safety . GCSE Physics Revision. 
Disponível em: www.shalom-education.com. 
Acesso em: 5 jul. 2024 (adaptado). 
Considerando o carro, seus ocupantes e o muro da figura 
como um sistema isolado, o crumple zone aumenta a 
segurança dos passageiros porque, durante uma colisão, 
a deformação da estrutura do carro`,
 images: ['/enem/2024/images/enem_2024_d2_q91.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`aciona os airbags do veículo.`},
 { id: 'B', type: 'text', value:`absorve a energia cinética do sistema.`},
 { id: 'C', type: 'text', value:`consome a quantidade de movimento do sistema.`},
 { id: 'D', type: 'text', value:`cria uma barreira de proteção para seus ocupantes.`},
 { id: 'E', type: 'text', value:`diminui a velocidade do centro de massa do sistema.`},
 ],
 correct: 'B',
 explanation: `O crumple zone é projetado para se deformar facilmente durante a colisão. Ao se deformar, a estrutura realiza trabalho e dissipa a energia cinética do sistema carro-ocupantes, convertendo-a em energia de deformação, o que aumenta o tempo de impacto e reduz a força sobre os passageiros. Como o problema considera o conjunto como sistema isolado, a quantidade de movimento se conserva e não pode ser 'consumida'; o papel da deformação é justamente absorver a energia cinética. Por isso a deformação aumenta a segurança porque absorve a energia cinética do sistema (alternativa B).`,
 subject: ['fis'],
 topics: ['Impulso e quantidade de movimento', 'Trabalho, energia mecânica e potência', 'Questões aleatórias'],
 },
 {
 id: 92,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Células a combustível microbianas (CCM) são capazes 
de gerar eletricidade a partir de águas residuárias urbanas e 
agroindustriais. As CCM são compostas de duas câmaras. 
Numa delas, onde ocorre o tratamento da matéria orgânica, 
as bactérias eletrogênicas crescem formando um biofilme 
e se alimentam dos poluentes presentes no efluente. Ao se 
alimentarem, essas bactérias geram uma corrente elétrica 
que percorre o material sobre o qual elas formaram o biofilme. 
Um fio condutor externo possibilita a migração dessa corrente 
para uma segunda câmara, promovendo uma reação química. 
A figura esquematiza uma CCM e as reações envolvidas. 
CH₃COO⁻ (aq) + 2 H₂O (l) → 2 CO₂ (g) + 7 H⁺ (aq) + 8 e⁻
4 H⁺ (aq) + O₂ (g) + 4 e⁻ → 2 H₂O (l)
QUINTO, A. C. Biobaterias geram eletricidade a partir de 
esgoto sanitário e efluentes agroindustriais . Disponível em: 
https://jornal.usp.br. Acesso em: 1 dez. 2021 (adaptado). 
Qual das equações representa a reação global que ocorre 
durante o funcionamento dessa CCM?`,
 images: ['/enem/2024/images/enem_2024_d2_q92.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`CH₃COO⁻ (aq) + O₂ (g) → 2 CO₂ (g) + 3 H⁺ (aq)`},
 { id: 'B', type: 'text', value:`CO₂ (g) + O₂ (g) + H⁺ (aq) → H₂O (l) + CH₃COO⁻ (aq)`},
 { id: 'C', type: 'text', value:`CH₃COO⁻ (aq) + H⁺ (aq) + 2 O₂ (g) → 2 CO₂ (g) + 2 H₂O (l)`},
 { id: 'D', type: 'text', value:`CH₃COO⁻ (aq) + 6 H₂O (l) → 2 CO₂ (g) + 2 O₂ (g) + 15 H⁺ (aq)`},
 { id: 'E', type: 'text', value:`2 CO₂ (g) + 11 H⁺ (aq) + O₂ (g) → CH₃COO⁻ (aq) + 4 H₂O (l)`},
 ],
 correct: 'C',
 explanation: `A reação global é obtida somando as semirreações com o mesmo número de elétrons. Oxidação: CH₃COO⁻ + 2 H₂O → 2 CO₂ + 7 H⁺ + 8 e⁻. Redução (multiplicada por 2): 8 H⁺ + 2 O₂ + 8 e⁻ → 4 H₂O. Somando e cancelando 7 H⁺ e 2 H₂O comuns aos dois lados, obtém-se CH₃COO⁻ + H⁺ + 2 O₂ → 2 CO₂ + 2 H₂O. Essa é a equação global (alternativa C).`,
 subject: ['qui'],
 topics: ['Eletroquímica', 'Questões aleatórias'],
 },
 {
 id: 93,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`No senso comum, considera-se, ainda hoje, que 
compostos orgânicos são substâncias presentes nos seres 
vivos. Na Química, a expressão “compostos orgânicos” tem 
um uso histórico de mais de 200 anos, adquirindo diferentes 
conotações ao longo do desenvolvimento dessa ciência. 
Atualmente, atribui-se a essa expressão outro significado. 
A concepção científica atual define esses compostos 
como substâncias`,
 alternatives: [
 { id: 'A', type: 'text', value:`benéficas à saúde humana.`},
 { id: 'B', type: 'text', value:`capazes de serem biodegradadas.`},
 { id: 'C', type: 'text', value:`formadas a partir de gás carbônico.`},
 { id: 'D', type: 'text', value:`produzidas sem o uso de agrotóxicos.`},
 { id: 'E', type: 'text', value:`contendo carbono como elemento principal.`},
 ],
 correct: 'E',
 explanation: `A expressão 'compostos orgânicos', que antes se referia a substâncias produzidas por seres vivos, hoje tem significado puramente químico. A concepção científica atual define compostos orgânicos como substâncias que contêm carbono como elemento principal em sua estrutura. Portanto, a definição atual é a de substâncias contendo carbono como elemento principal (alternativa E).`,
 subject: ['qui'],
 topics: ['Funções orgânicas e nomenclatura', 'Questões aleatórias'],
 },
 {
 id: 94,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A nimesulida é um fármaco pouco solúvel em água, 
utilizado como anti-inflamatório, analgésico e antitérmico. 
Essa substância pode ser convertida em uma espécie 
eletricamente carregada, de maior solubilidade em água, 
mediante o tratamento com uma base de Brönsted-Lowry, 
isto é, uma espécie química capaz de capturar um próton 
(H⁺). Na figura são apresentados os grupamentos presentes
na estrutura química da nimesulida. 
Nimesulida 
GONÇALVES, A. A. et al. Contextualizando reações ácido-base 
de acordo com a teoria protônica de Brönsted-Lowry 
usando comprimidos de propranolol e nimesulida. 
Química Nova , n. 3, 2013 (adaptado). 
Na estrutura desse fármaco, o grupamento capaz de 
reagir com a base de Brönsted-Lowry é o grupo`,
 images: ['/enem/2024/images/enem_2024_d2_q94.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`sulfonamida.`},
 { id: 'B', type: 'text', value:`metila.`},
 { id: 'C', type: 'text', value:`fenila.`},
 { id: 'D', type: 'text', value:`nitro.`},
 { id: 'E', type: 'text', value:`éter.`},
 ],
 correct: 'A',
 explanation: `Uma base de Brönsted-Lowry captura um próton (H⁺), reagindo com a espécie capaz de doar esse próton, ou seja, com o grupo mais ácido da molécula. Dentre os grupamentos da nimesulida, o hidrogênio ligado ao nitrogênio da sulfonamida (N–H vizinho ao grupo SO₂) é acentuadamente ácido e pode ser removido pela base, gerando a espécie carregada mais solúvel. Logo, o grupo capaz de reagir com a base é a sulfonamida (alternativa A).`,
 subject: ['qui'],
 topics: ['Funções orgânicas e nomenclatura', 'Questões aleatórias'],
 },
 {
 id: 95,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O desenvolvimento da biotecnologia e da clonagem 
gênica em procariotos fez com que a produção de proteínas 
se tornasse mais intensa, rápida e econômica. Para a 
produção de hormônios, enzimas e proteínas de resistência 
a drogas, uma variação da técnica de reação em cadeia 
pela polimerase (PCR, na sigla em inglês) utiliza a enzima 
transcriptase reversa (RT-PCR), que sintetiza moléculas 
de DNA complementares a partir de fitas de RNA. 
Nesse contexto, essa técnica é importante para detectar 
genes`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`expressos.`},
 { id: 'B', type: 'text', value:`plasmidiais.`},
 { id: 'C', type: 'text', value:`bacterianos.`},
 { id: 'D', type: 'text', value:`dominantes.`},
 { id: 'E', type: 'text', value:`autossômicos.`},
 ],
 correct: 'A',
 explanation: `A RT-PCR utiliza a transcriptase reversa para sintetizar moléculas de DNA complementar (cDNA) a partir de fitas de RNA, em especial o RNA mensageiro. Como só existe mRNA dos genes que estão efetivamente sendo transcritos na célula, a técnica identifica apenas os genes que estão sendo expressos naquele momento. Por isso ela é importante para detectar genes expressos (alternativa A).`,
 subject: ['bio'],
 topics: ['Biotecnologia', 'Questões aleatórias'],
 },
 {
 id: 96,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Nos automóveis, é importante garantir que o centro de 
massa ( CM ) de cada conjunto roda/pneu coincida com o 
seu centro geométrico. Esse processo é realizado em uma 
máquina de balanceamento, na qual o conjunto roda e pneu 
é colocado para girar a uma velocidade de valor constante. 
Com base nas oscilações medidas, a máquina indica a 
posição do centro de massa do conjunto, e pequenas 
peças de chumbo são fixadas em lugares específicos da 
roda até que as vibrações diminuam. Durante o treinamento 
de sua equipe, a fim de corrigir a posição do centro de 
massa indicada pela máquina, um mecânico apresenta 
o esquema a seguir, com cinco possíveis pontos da roda 
para posicionar uma peça de chumbo. 
Em qual ponto deve ser fixada a peça de chumbo para corrigir 
a posição do centro de massa desse conjunto roda/pneu?`,
 images: ['/enem/2024/images/enem_2024_d2_q96.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1`},
 { id: 'B', type: 'text', value:`2`},
 { id: 'C', type: 'text', value:`3`},
 { id: 'D', type: 'text', value:`4`},
 { id: 'E', type: 'text', value:`5`},
 ],
 correct: 'C',
 explanation: `Para corrigir o desbalanceamento, a peça de chumbo deve ser fixada no ponto diametralmente oposto ao deslocamento do centro de massa, de modo a trazê-lo de volta ao centro geométrico. No esquema, o CM está deslocado para o lado superior direito da roda (em direção ao ponto 5). O ponto diametralmente oposto a essa posição é o inferior esquerdo, correspondente ao ponto 3. Assim, o chumbo deve ser fixado no ponto 3 (alternativa C).`,
 subject: ['fis'],
 topics: ['Dinâmica', 'Questões aleatórias'],
 },
 {
 id: 97,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O soro caseiro serve para combater a desidratação por 
meio da reposição da água e sais minerais perdidos, 
por exemplo, por diarreia. Uma receita simples para a sua 
preparação consiste em utilizar duas colheres grandes 
(de sopa) de açúcar e duas colheres pequenas (de café) 
de sal de cozinha, dissolvidos em 2 L de água fervida, 
obtendo-se uma solução com concentração de íon sódio 
de 1,4 mg/mL. 
Considere as massas molares: NaCl = 58,5 g/mol; 
Na = 23 g/mol. 
Qual é o valor mais próximo da massa, em grama, de 
cloreto de sódio presente em uma única colher pequena?`,
 alternatives: [
 { id: 'A', type: 'text', value:`0,7 g`},
 { id: 'B', type: 'text', value:`1,8 g`},
 { id: 'C', type: 'text', value:`2,8 g`},
 { id: 'D', type: 'text', value:`3,6 g`},
 { id: 'E', type: 'text', value:`7,0 g`},
 ],
 correct: 'D',
 explanation: `A concentração de íon sódio é 1,4 mg/mL em 2 L (2000 mL), o que dá 1,4 × 2000 = 2800 mg = 2,8 g de Na⁺ provenientes das duas colheres pequenas de sal. A massa total de NaCl é obtida pela proporção das massas molares: 2,8 × (58,5/23) ≈ 7,1 g de NaCl nas duas colheres. Dividindo por 2, cada colher pequena contém cerca de 3,6 g de cloreto de sódio (alternativa D).`,
 subject: ['qui'],
 topics: ['Soluções e concentração', 'Questões aleatórias'],
 },
 {
 id: 98,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Apesar de os animais representados no cladograma 
compartilharem um mesmo ancestral, eles se caracterizam 
por distintos padrões de reprodução ou de nutrição dos 
embriões e descendentes. 
DIXSON, A. F. Mammalian Sexuality : The Act of Mating and the 
Evolution of Reproduction. Disponível em: www.cambridge.org. 
Acesso em: 2 jul. 2024 (adaptado). 
Ao longo do processo evolutivo, percebem-se, entre 
esses animais, perdas e ganhos nos padrões citados que 
envolvem o(a)`,
 images: ['/enem/2024/images/enem_2024_d2_q98.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`aumento no número de descendentes por ninhada.`},
 { id: 'B', type: 'text', value:`mudança no tipo de fecundação de externa para interna.`},
 { id: 'C', type: 'text', value:`redução da versatilidade de reprodução, que se torna 
unicamente sexuada.`},
 { id: 'D', type: 'text', value:`desenvolvimento embrionário, que passa do meio 
aquático para o terrestre.`},
 { id: 'E', type: 'text', value:`diminuição da vesícula vitelínica, associada ao 
desenvolvimento da lactação.`},
 ],
 correct: 'E',
 explanation: `O cladograma vai dos monotremados (que põem ovos) aos marsupiais e placentários. Ao longo dessa evolução, há redução da vesícula vitelínica — a reserva nutritiva do ovo — acompanhada do desenvolvimento da lactação, que passa a nutrir os filhotes com o leite materno. Essa diminuição da vesícula vitelínica associada à lactação é o padrão evidenciado (alternativa E).`,
 subject: ['bio'],
 topics: ['Evolução', 'Questões aleatórias'],
 },
 {
 id: 99,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma ambulância em alta velocidade com a sirene ligada
desloca-se em direção a um radar operado por uma pessoa.
O radar emite ondas de rádio com frequência f₀ que são
refletidas pela dianteira da ambulância, retornando para
o detector com frequência fᵣ. A percepção do operador do
radar, em relação ao som emitido pela sirene, é de que
este se altera à medida que a ambulância se aproxima
ou se afasta.
Durante a aproximação, como o operador percebe o som
da sirene e qual é a relação entre as frequências fᵣ e f₀
medidas pelo radar?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Mais grave do que o som emitido e fᵣ < f₀.`},
 { id: 'B', type: 'text', value:`Mais agudo do que o som emitido e fᵣ < f₀.`},
 { id: 'C', type: 'text', value:`Mais agudo do que o som emitido e fᵣ = f₀.`},
 { id: 'D', type: 'text', value:`Mais agudo do que o som emitido e fᵣ > f₀.`},
 { id: 'E', type: 'text', value:`Mais grave do que o som emitido e fᵣ > f₀.`},
 ],
 correct: 'D',
 explanation: `Na aproximação entre fonte e observador, o efeito Doppler faz o som ser percebido mais agudo, pois a frequência aparente aumenta. No radar, a onda emitida com frequência f₀ é refletida pela dianteira em aproximação e retorna com frequência ainda maior, de modo que fᵣ > f₀. Logo, o som é percebido mais agudo e fᵣ > f₀ (alternativa D).`,
 subject: ['fis'],
 topics: ['Ondulatória e acústica', 'Questões aleatórias'],
 },
 {
 id: 100,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Mirascópio 3D: produtor de ilusão instantânea 
O equipamento ilustrado na figura, de dimensões 
apresentadas no esquema, é composto por dois espelhos 
côncavos E 1 e E 2 , apoiados um sobre o outro por suas 
bordas, de tal forma que o vértice de E 1 coincide com 
o foco de E 2 e vice-versa. Na abertura circular de 
E 2 , é formada uma imagem tridimensional de um objeto 
posicionado sobre o vértice de E 1 . Essa imagem é 
formada a partir dos raios procedentes do objeto, refletidos 
por E 2 e E 1 , respectivamente, conforme o esquema. 
Os observadores julgam visualizar o objeto quando estão, 
de fato, visualizando sua imagem. O efeito só é possível 
porque as superfícies de ambos os espelhos são de 
extrema qualidade. 
SALZMANN, W. Disponível em: https://wissenstexte.de. 
Acesso em: 27 jun. 2024 (adaptado). 
A natureza da imagem formada e a distância vertical entre 
cada ponto objeto e seu correspondente ponto imagem são`,
 images: ['/enem/2024/images/enem_2024_d2_q100.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`real e 5 cm.`},
 { id: 'B', type: 'text', value:`real e 3,8 cm.`},
 { id: 'C', type: 'text', value:`real e 7,6 cm.`},
 { id: 'D', type: 'text', value:`virtual e 7,6 cm.`},
 { id: 'E', type: 'text', value:`virtual e 3,8 cm.`},
 ],
 correct: 'C',
 explanation: `Os dois espelhos côncavos de alta qualidade, com vértice de um sobre o foco do outro, convergem os raios refletidos e formam uma imagem real na abertura superior (projetável, por isso 'real'). A distância vertical entre o ponto-objeto, apoiado no vértice de E₁ (embaixo), e o ponto-imagem, na abertura de E₂ (em cima), corresponde à altura total da estrutura, igual a 3,8 + 3,8 = 7,6 cm. Portanto, a imagem é real e a distância é de 7,6 cm (alternativa C).`,
 subject: ['fis'],
 topics: ['Óptica', 'Questões aleatórias'],
 },
 {
 id: 101,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A saúde do professor: acústica arquitetônica 
Dentre os parâmetros acústicos que afetam a 
inteligibilidade dos sons emitidos em ambientes fechados, 
destacam-se o ruído de fundo do ambiente e o decréscimo 
do nível sonoro com a distância da fonte emissora. Assim, 
sentar-se no fundo da sala de aula pode prejudicar a 
aprendizagem dos estudantes, por impedir que eles 
distingam, com precisão, os sons emitidos, diminuindo a 
inteligibilidade da fala de seus professores. Considere a 
situação exemplificada pelo infográfico: à distância de 
1 metro, o nível sonoro da fala de um professor é de 
60 dB e diminui com a distância. Considere, ainda, que o 
ruído de fundo nessa sala de aula pode chegar a 45 dB 
e que, para ser compreendida, o nível sonoro da fala do 
professor deve estar 5 dB acima desse ruído. 
Disponível em: www.ufrrj.br. Acesso em: 2 dez. 2021 (adaptado). 
Para um valor máximo do ruído de fundo, a maior distância 
que um estudante pode estar do professor para que ainda 
consiga compreender sua fala é mais próxima de`,
 images: ['/enem/2024/images/enem_2024_d2_q101.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`3,0 m.`},
 { id: 'B', type: 'text', value:`4,5 m.`},
 { id: 'C', type: 'text', value:`6,5 m.`},
 { id: 'D', type: 'text', value:`8,0 m.`},
 { id: 'E', type: 'text', value:`9,5 m.`},
 ],
 correct: 'A',
 explanation: `Para que a fala seja compreendida, seu nível sonoro deve estar 5 dB acima do ruído de fundo máximo (45 dB), ou seja, pelo menos 50 dB. A 1 m o nível é de 60 dB e, para a fonte sonora, decai cerca de 6 dB a cada duplicação da distância (60 dB a 1 m, 54 dB a 2 m, 48 dB a 4 m). O nível de 50 dB é atingido a aproximadamente 3 m, conforme a leitura do gráfico. Assim, a maior distância é próxima de 3,0 m (alternativa A).`,
 subject: ['fis'],
 topics: ['Ondulatória e acústica', 'Questões aleatórias'],
 },
 {
 id: 102,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma agricultora, com a intenção de comercializar o 
milho recém-colhido, testou uma forma de preservar o 
sabor adocicado do seu produto. O melhor resultado foi 
obtido quando ela imergiu as espigas em água fervente 
durante alguns minutos e, em seguida, em água gelada. 
Com esse procedimento, parte da glicose do milho não foi 
transformada em amido, mantendo o seu sabor adocicado. 
Utilizando esse procedimento, o sabor foi conservado 
porque houve`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`desnaturação enzimática pela alta temperatura.`},
 { id: 'B', type: 'text', value:`conversão de nutrientes pela redução de temperatura.`},
 { id: 'C', type: 'text', value:`degradação das reservas nutritivas pelo choque térmico.`},
 { id: 'D', type: 'text', value:`impedimento da entrada de oxigênio pela fervura da água.`},
 { id: 'E', type: 'text', value:`desidratação dos grãos por causa da alteração da
temperatura.`},
 ],
 correct: 'A',
 explanation: `A imersão das espigas em água fervente aquece os grãos e provoca a desnaturação das enzimas (amilases) responsáveis por converter a glicose em amido. Com as enzimas inativadas pela alta temperatura, essa conversão é impedida e a glicose, responsável pelo sabor adocicado, é preservada. Por isso o sabor foi conservado devido à desnaturação enzimática pela alta temperatura (alternativa A).`,
 subject: ['bio'],
 topics: ['Bioquímica', 'Questões aleatórias'],
 },
 {
 id: 103,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Aquecedores solares são equipamentos utilizados para 
o aquecimento de água pelo calor do Sol. São compostos 
por coletores solares, nos quais ocorre o aquecimento da 
água, e por um reservatório térmico, em que é armazenada 
a água quente para ser utilizada posteriormente. A figura 
ilustra esquematicamente como funciona esse equipamento. 
5 dicas de instalação de aquecedor solar . Disponível em: 
https://instaline.com.br. Acesso em: 3 nov. 2023 (adaptado). 
O processo pelo qual ocorre transferência de calor dos 
coletores solares para o reservatório térmico é a`,
 images: ['/enem/2024/images/enem_2024_d2_q103.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`difusão.`},
 { id: 'B', type: 'text', value:`absorção.`},
 { id: 'C', type: 'text', value:`condução.`},
 { id: 'D', type: 'text', value:`irradiação.`},
 { id: 'E', type: 'text', value:`convecção.`},
 ],
 correct: 'E',
 explanation: `Nos líquidos, a principal forma de transferência de calor é a convecção, que depende do movimento do próprio fluido. A água aquecida nos coletores solares torna-se menos densa e sobe, enquanto a água mais fria e densa desce, estabelecendo correntes de convecção. Essas correntes transportam o calor dos coletores até o reservatório térmico. Trata-se, portanto, de transferência de calor por convecção (alternativa E).`,
 subject: ['fis'],
 topics: ['Propagação de calor', 'Questões aleatórias'],
 },
 {
 id: 104,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As autoridades sanitárias brasileiras têm se preocupado 
muito nos últimos anos com o aumento da ocorrência 
de doenças transmitidas por mosquitos, principalmente 
arboviroses como chikungunya e zika, que se tornaram 
epidêmicas ou endêmicas em áreas urbanas. Parte de 
uma análise da relação entre a urbanização e a incidência 
dessas doenças está representada no fluxograma. 
ALMEIDA, L. S.; COTA, A. L. S.; RODRIGUES, D. F. Saneamento, 
arboviroses e determinantes ambientais: impactos na saúde urbana. 
Ciência & Saúde Coletiva , v. 25, n. 10, 2020 (adaptado). 
Nesse contexto, como a urbanização está causando 
riscos à saúde humana?`,
 images: ['/enem/2024/images/enem_2024_d2_q104.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Disseminando verminoses.`},
 { id: 'B', type: 'text', value:`Causando a eutrofização de lagoas.`},
 { id: 'C', type: 'text', value:`Aumentando a chance de contato com coliformes.`},
 { id: 'D', type: 'text', value:`Diminuindo a população de predadores aquáticos.`},
 { id: 'E', type: 'text', value:`Aproximando as pessoas das áreas de ocorrência de 
mosquitos.`},
 ],
 correct: 'D',
 explanation: `O fluxograma mostra que a urbanização, ao avançar sobre o ambiente, aproxima as populações humanas das áreas de ocorrência dos mosquitos vetores (como o Aedes aegypti). Esse maior contato entre pessoas e vetores favorece a transmissão das arboviroses, como zika e chikungunya. Logo, o risco à saúde decorre de aproximar as pessoas das áreas de ocorrência de mosquitos (alternativa E).`,
 subject: ['bio'],
 topics: ['Microbiologia e doenças', 'Questões aleatórias'],
 },
 {
 id: 105,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Impactos do microplástico 
A ação de fatores abióticos aliada à biodeterioração 
contribuem para a formação de microplásticos, os quais se 
aderem a outros poluentes orgânicos apolares persistentes, 
como os derivados de pesticidas lipossolúveis. Há uma 
proporcionalidade direta entre a solubilidade desses tipos de 
poluentes e sua concentração nos tecidos dos organismos 
expostos a eles. 
Disponível em: www.ecycle.com.br. 
Acesso em: 9 dez. 2021 (adaptado). 
Em animais vertebrados, essa associação de poluentes 
será preferencialmente acumulada no tecido`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`ósseo.`},
 { id: 'B', type: 'text', value:`nervoso.`},
 { id: 'C', type: 'text', value:`epitelial.`},
 { id: 'D', type: 'text', value:`adiposo.`},
 { id: 'E', type: 'text', value:`sanguíneo.`},
 ],
 correct: 'D',
 explanation: `Os poluentes associados aos microplásticos são apolares e lipossolúveis (derivados de pesticidas lipossolúveis). Substâncias lipossolúveis acumulam-se preferencialmente no tecido rico em lipídios, isto é, no tecido adiposo, que armazena gordura. Por isso essa associação de poluentes concentra-se no tecido adiposo (alternativa D).`,
 subject: ['bio'],
 topics: ['Embriologia, histologia e reprodução', 'Questões aleatórias'],
 },
 {
 id: 106,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em aeroportos, por razões de segurança, os 
passageiros devem ter suas bagagens de mão examinadas 
antes do embarque, passando-as em esteiras para sua 
inspeção por aparelhos de raios X. Nessas inspeções, os 
passageiros são orientados a retirar seus computadores 
portáteis (notebooks ou laptops) de malas, mochilas ou 
bolsas para passá-los isoladamente pela esteira. 
Que explicação física justifica esse procedimento?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Os raios X não interagem com os componentes 
metálicos do computador, o que impede a formação 
de imagens.`},
 { id: 'B', type: 'text', value:`Os raios X desmagnetizam o disco rígido do 
computador, quando refratados pelos componentes 
metálicos das bagagens de mão.`},
 { id: 'C', type: 'text', value:`Os raios X aquecem os materiais metálicos encontrados 
em bagagens de mão, quando refletidos pelos 
componentes do computador.`},
 { id: 'D', type: 'text', value:`Os raios X não atravessam os componentes densos do 
computador, o que impede a visualização de objetos 
que estão à frente ou atrás deles.`},
 { id: 'E', type: 'text', value:`Os raios X ionizam os materiais metálicos normalmente
encontrados em bagagens de mão, quando difratados
pelos componentes do computador.`},
 ],
 correct: 'D',
 explanation: `Os raios X atravessam materiais pouco densos, mas são fortemente absorvidos pelos componentes densos de um computador portátil. Se o notebook permanecesse dentro da mala, suas partes densas bloqueariam os raios X e impediriam a visualização de objetos posicionados à frente ou atrás dele. Por isso ele é inspecionado isoladamente (alternativa D).`,
 subject: ['fis'],
 topics: ['Física moderna', 'Questões aleatórias'],
 },
 {
 id: 107,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Com base em testes realizados em ratos, concluiu-se 
que os compostos nitrosos são substâncias mutagênicas, 
ou seja, produzem mutações nas células e possivelmente 
câncer. Esses compostos podem ser obtidos pela reação 
entre o nitrito de sódio, que é um conservante adicionado 
às carnes, e o ácido clorídrico. O ácido nitroso produzido 
irá reagir com compostos nitrogenados, como as aminas, 
dando origem aos compostos nitrosos. 
Em qual órgão esse processo será iniciado?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`Rim.`},
 { id: 'B', type: 'text', value:`Fígado.`},
 { id: 'C', type: 'text', value:`Intestino.`},
 { id: 'D', type: 'text', value:`Pâncreas.`},
 { id: 'E', type: 'text', value:`Estômago.`},
 ],
 correct: 'E',
 explanation: `O ácido nitroso, precursor dos compostos nitrosos, forma-se na reação entre o nitrito de sódio e o ácido clorídrico. O ácido clorídrico está presente no suco gástrico, no estômago, que é o ambiente ácido onde essa reação ocorre. Portanto, o processo de formação dos compostos nitrosos será iniciado no estômago (alternativa E).`,
 subject: ['bio'],
 topics: ['Fisiologia humana', 'Questões aleatórias'],
 },
 {
 id: 108,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Sistemas agroflorestais (SAFs) 
Os sistemas agroflorestais alinham os interesses 
econômicos aos ecológicos. Esses sistemas podem ser 
usados na recuperação ambiental de áreas degradadas que 
se tornaram pouco produtivas, como as utilizadas por muito 
tempo para pastagem. Para isso, num primeiro momento, 
as árvores nativas são plantadas em conjunto com culturas 
agrícolas anuais, como feijão, mandioca, milho e abóbora, 
que geram renda para os proprietários da terra e incentivam 
a manutenção do sistema. Em um segundo momento, são 
introduzidas outras espécies, como trepadeiras e arbustos, de 
acordo com um arranjo espacial e temporal preestabelecido. 
Nesse processo, ocorrerão mudanças graduais na estrutura 
e composição das comunidades vegetais ao longo do tempo, 
que culminarão no aumento da diversidade do ambiente. 
Disponível em: www.embrapa.br. Acesso em: 9 dez. 2021 (adaptado). 
O conjunto dessas mudanças graduais é análogo ao 
processo natural denominado`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`rotação de culturas.`},
 { id: 'B', type: 'text', value:`sucessão ecológica.`},
 { id: 'C', type: 'text', value:`coevolução específica.`},
 { id: 'D', type: 'text', value:`adaptação por seleção.`},
 { id: 'E', type: 'text', value:`convergência adaptativa.`},
 ],
 correct: 'B',
 explanation: `No sistema agroflorestal, há substituição gradual das espécies ao longo do tempo — primeiro árvores nativas com culturas anuais, depois trepadeiras e arbustos — com aumento progressivo da estrutura e da diversidade da comunidade. Esse conjunto de mudanças graduais reproduz o processo natural de sucessão ecológica. Logo, é análogo à sucessão ecológica (alternativa B).`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 109,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As fibras musculares esqueléticas não são todas 
iguais. As fibras lentas, também conhecidas como fibras 
vermelhas, apresentam muitas mitocôndrias e são bem 
supridas por vasos sanguíneos. Já as fibras rápidas, ou 
fibras brancas, apresentam poucas mitocôndrias e recebem 
menor suprimento sanguíneo. Dessa forma, a distribuição 
das fibras nos músculos esqueléticos do corpo auxilia de 
forma diferenciada no desempenho físico de um atleta. 
SADAVA, D. et al. Vida: a ciência da biologia - volume III: 
plantas e animais. Porto Alegre: Artmed, 2009 (adaptado). 
Um atleta que sonha em disputar os Jogos Olímpicos e 
tem uma maior proporção de fibras brancas que fibras 
vermelhas teria mais vantagens na realização da prova de:`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`Triatlo.`},
 { id: 'B', type: 'text', value:`Salto em altura.`},
 { id: 'C', type: 'text', value:`Marcha atlética.`},
 { id: 'D', type: 'text', value:`Maratona aquática.`},
 { id: 'E', type: 'text', value:`Ciclismo em estrada.`},
 ],
 correct: 'B',
 explanation: `As fibras brancas (rápidas) possuem poucas mitocôndrias e pouco suprimento sanguíneo, mas produzem contrações rápidas, potentes e de curta duração, usando metabolismo predominantemente anaeróbio. Um atleta com maior proporção dessas fibras leva vantagem em provas explosivas e de curta duração, como o salto em altura. As demais provas citadas são de longa duração, favorecendo fibras vermelhas (alternativa B).`,
 subject: ['bio'],
 topics: ['Fisiologia humana', 'Questões aleatórias'],
 },
 {
 id: 110,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O Cerrado e a Amazônia abrigam grande número de 
serpentes popularmente conhecidas como cobras-corais. 
Na Amazônia predominam as corais-verdadeiras, que 
são peçonhentas, enquanto no Cerrado prevalecem as 
falsas-corais, que não possuem peçonha. Essas espécies 
apresentam um padrão de coloração muito semelhante. 
Essa similaridade traz uma vantagem tanto para as corais 
falsas como para as verdadeiras. 
FRANÇA, F. G. R. [...] serpentes corais em ambientes 
campestres, savânicos e florestais da América do Sul . 
Brasília: UnB, 2008 (adaptado). 
Nas fotografias, são apresentados exemplos dessas 
serpentes: uma coral-verdadeira e uma falsa-coral. 
SILVA, L. C.; COTTA, G. A.; RESENDE, F. C. Cobra-coral: aplicativo 
educativo para reconhecimento das cobras-corais do estado de 
Minas Gerais, Brasil. Herpetologia Brasileira , 
n. 1, 2021 (adaptado). 
Qual é a vantagem dessa similaridade para as falsas-corais?`,
 images: ['/enem/2024/images/enem_2024_d2_q110.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Facilita a captura de presas.`},
 { id: 'B', type: 'text', value:`Diminui a competição por recursos.`},
 { id: 'C', type: 'text', value:`Possibilita a geração de indivíduos híbridos.`},
 { id: 'D', type: 'text', value:`Reduz a possibilidade de sofrerem predação.`},
 { id: 'E', type: 'text', value:`Otimiza o encontro de parceiros reprodutivos.`},
 ],
 correct: 'D',
 explanation: `As falsas-corais, embora não tenham peçonha, apresentam padrão de coloração muito semelhante ao das corais-verdadeiras peçonhentas, caracterizando mimetismo. Essa semelhança faz com que predadores as confundam com as serpentes perigosas e evitem atacá-las. Assim, a vantagem para as falsas-corais é reduzir a possibilidade de sofrerem predação (alternativa D).`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 111,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O exoesqueleto dos crustáceos é formado por quitina 
e impregnações de sais calcários e, por isso, é mais 
duro quando comparado com o exoesqueleto de outros 
artrópodes. Esse revestimento externo confere proteção, 
mas, por ser duro, limita o crescimento desses animais. 
Para superar essa limitação, o exoesqueleto deve ser`,
 alternatives: [
 { id: 'A', type: 'text', value:`formado somente na fase adulta do animal.`},
 { id: 'B', type: 'text', value:`fragmentado para expansão nas áreas de articulação.`},
 { id: 'C', type: 'text', value:`modelado continuamente para ajuste ao tamanho do corpo.`},
 { id: 'D', type: 'text', value:`substituído por meio de mudas que ocorrem periodicamente.`},
 { id: 'E', type: 'text', value:`impregnado por pequena quantidade de sais para sua
distensão.`},
 ],
 correct: 'D',
 explanation: `O exoesqueleto dos crustáceos é rígido devido à impregnação por sais calcários e não cresce junto com o corpo, limitando o crescimento do animal. Para superar essa limitação, o exoesqueleto é periodicamente substituído por meio de mudas (ecdise), nas quais o antigo revestimento é eliminado e um novo, maior, é formado. Logo, ele deve ser substituído por meio de mudas que ocorrem periodicamente (alternativa D).`,
 subject: ['bio'],
 topics: ['Zoologia', 'Questões aleatórias'],
 },
 {
 id: 112,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um dos exemplos mais conhecidos de herança 
recessiva ligada ao cromossomo X é o daltonismo. 
Como em qualquer distúrbio recessivo ligado ao 
cromossomo X, existem muito mais homens apresentando 
o fenótipo com esse tipo de daltonismo do que mulheres. 
Um casal formado por um homem não daltônico e por uma 
mulher gestante também não daltônica, mas portadora 
do gene recessivo para esse tipo de daltonismo, está 
esperando um bebê. Em uma das consultas de pré-natal, 
o casal recebeu um heredograma que contém todas as 
possibilidades de genótipo para esse bebê. 
Considere a legenda: 
Mulher heterozigota portadora 
do gene para daltonismo 
Mulher não daltônica 
Mulher daltônica 
Homem não daltônico 
Homem daltônico 
GRIFFITHS, A. et al. Introdução à genética . Rio de Janeiro: 
Guanabara Koogan, 2016 (adaptado). 
Qual heredograma foi recebido pelo casal?`,
 images: ['/enem/2024/images/enem_2024_d2_q112.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q112_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q112_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q112_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q112_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q112_E.jpg` },
 ],
 correct: 'B',
 explanation: `Como o daltonismo é recessivo ligado ao X, o cruzamento é X^A Y (pai não daltônico) × X^A X^a (mãe portadora, não daltônica). As filhas podem ser X^A X^A (não daltônica) ou X^A X^a (portadora) — nunca daltônicas. Os filhos podem ser X^A Y (não daltônico) ou X^a Y (daltônico). O heredograma que contém exatamente essas possibilidades (filha não daltônica, filha portadora, filho não daltônico e filho daltônico, sem nenhuma filha daltônica) é o da alternativa B.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 113,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Metabolismo de procariontes 
O esquema representa a ação de organismos no 
ciclo do nitrogênio e no ciclo do carbono. Os números 
correspondem a algumas etapas dos dois ciclos distintos. 
Disponível em: https://pt.khanacademy.org. 
Acesso em: 27 jun. 2024 (adaptado). 
Em qual etapa numerada ocorre uma transformação redox 
como a que ocorre nos procariontes nitrificantes?`,
 images: ['/enem/2024/images/enem_2024_d2_q113.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1`},
 { id: 'B', type: 'text', value:`2`},
 { id: 'C', type: 'text', value:`3`},
 { id: 'D', type: 'text', value:`4`},
 { id: 'E', type: 'text', value:`5`},
 ],
 correct: 'E',
 explanation: `A nitrificação realizada pelos procariontes nitrificantes (NH₃ → nitritos → nitratos) é uma oxidação, em que o nitrogênio perde elétrons liberando energia. Entre as etapas numeradas, a etapa 5 — procariontes decompositores que convertem o carbono orgânico fixado em CO₂ — também é uma oxidação que fornece energia ao microrganismo, sendo a transformação redox análoga. Por isso a resposta é a etapa 5 (alternativa E).`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 114,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um dos agentes que mais contribui para a poluição 
do ar é o automóvel a combustão interna. Em áreas 
urbanas, isso é demonstrado dramaticamente pela 
fumaça fotoquímica, resultante da interação entre óxidos 
de nitrogênio, hidrocarbonetos e luz solar, para formar 
produtos de oxidação, que causam irritação aos olhos, ao 
aparelho respiratório e danos às plantas. As condições de 
operação de motores a combustão, como a razão da mistura 
ar/combustível no cilindro, influenciam na composição 
dos gases lançados pelo escapamento na atmosfera. 
O gráfico ilustra a variação nas composições dos principais 
gases, dióxido de carbono (CO₂ ), hidrocarbonetos (HC), 
monóxido de carbono (CO), monóxido de nitrogênio (NO) e 
oxigênio molecular (O 2 ), emitidos por um motor a gasolina, 
em diferentes razões ar/combustível, em massa. 
RANGEL, M. C.; CARVALHO, M. F. A. Impacto dos catalisadores automotivos 
 no controle da qualidade do ar. Química Nova , v. 26, 2003 (adaptado). 
Na condição de razão ar/combustível igual a 18, haverá 
uma emissão`,
 images: ['/enem/2024/images/enem_2024_d2_q114.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`baixa de O 2 e alta de NO.`},
 { id: 'B', type: 'text', value:`baixa de NO e alta de HC.`},
 { id: 'C', type: 'text', value:`baixa de CO e alta de CO₂ .`},
 { id: 'D', type: 'text', value:`baixa de HC e alta de CO.`},
 { id: 'E', type: 'text', value:`baixa de CO₂ e alta de HC.`},
 ],
 correct: 'C',
 explanation: `A razão ar/combustível igual a 18 está à direita da razão estequiométrica (~14,7), correspondendo a mistura pobre, com excesso de ar. No gráfico, nessa condição a curva do CO está praticamente nula (baixa emissão de CO), pois o excesso de oxigênio garante combustão mais completa, enquanto o CO₂ ainda se mantém elevado. Portanto, há baixa emissão de CO e alta de CO₂ (alternativa C).`,
 subject: ['qui'],
 topics: ['Química ambiental', 'Questões aleatórias'],
 },
 {
 id: 115,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O esquema representa um experimento feito com 
células do protozoário Amoeba proteus . Nele, um grupo 
de células foi tratado com a droga citocalasina B, enquanto 
outro grupo não foi tratado, servindo como controle. 
O formato e o movimento das células tratadas foram 
comprometidos. 
SADAVA, D. et al. Vida: a ciência da biologia - volume I: célula e 
hereditariedade. Porto Alegre: Artmed, 2009 (adaptado). 
Qual componente celular foi afetado pela droga utilizada 
no experimento?`,
 images: ['/enem/2024/images/enem_2024_d2_q115_1.jpg', '/enem/2024/images/enem_2024_d2_q115_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Vacúolos.`},
 { id: 'B', type: 'text', value:`Mitocôndrias.`},
 { id: 'C', type: 'text', value:`Microfilamentos.`},
 { id: 'D', type: 'text', value:`Material genético.`},
 { id: 'E', type: 'text', value:`Membrana plasmática.`},
 ],
 correct: 'C',
 explanation: `A citocalasina B é uma droga que inibe a polimerização dos microfilamentos de actina do citoesqueleto. Como o formato e o movimento ameboide da Amoeba proteus dependem dos microfilamentos de actina (que formam os pseudópodes), o tratamento comprometeu justamente esse componente. Logo, o componente afetado foram os microfilamentos (alternativa C).`,
 subject: ['bio'],
 topics: ['Citologia', 'Questões aleatórias'],
 },
 {
 id: 116,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O magnésio metálico utilizado em ligas leves é 
produzido em um processo que envolve várias etapas e 
utiliza água do mar como matéria-prima. A primeira etapa 
desse processo consiste na reação entre o íon Mg²⁺ e
hidróxido de cálcio, Ca(OH)₂ , obtendo uma mistura que 
contém hidróxido de magnésio, pouco solúvel, e íons Ca²⁺ , 
de acordo com a equação química: 
Mg²⁺ (aq) + Ca(OH)₂ (aq) → Mg(OH)₂ (s) + Ca²⁺ (aq) 
O método adequado para separar o Mg(OH)₂ dessa 
mistura é a`,
 alternatives: [
 { id: 'A', type: 'text', value:`filtração.`},
 { id: 'B', type: 'text', value:`catação.`},
 { id: 'C', type: 'text', value:`destilação.`},
 { id: 'D', type: 'text', value:`dissolução.`},
 { id: 'E', type: 'text', value:`evaporação.`},
 ],
 correct: 'A',
 explanation: `O hidróxido de magnésio, Mg(OH)₂, é um sólido pouco solúvel que permanece em suspensão na mistura aquosa contendo íons Ca²⁺ dissolvidos. O método adequado para separar um sólido insolúvel de um líquido é a filtração, que retém o precipitado e deixa passar a solução. Assim, o Mg(OH)₂ é separado por filtração (alternativa A).`,
 subject: ['qui'],
 topics: ['Propriedades da matéria e separação de misturas', 'Questões aleatórias'],
 },
 {
 id: 117,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Moradores do Brooklin, bairro de São Paulo, perdem o 
sono com um som alto, constante e estridente. O barulho é 
causado por anfíbios anuros trazidos do Caribe, da espécie 
Eleutherodactylus jahnstonei , que têm tamanho um pouco 
maior que o de um grão de feijão e que encontraram na 
capital um ambiente favorável. Cientistas foram até o local 
e encontraram esses animais nos jardins das casas. 
Pererecas-assobiadoras tiram o sono de moradores do 
Brooklin . Disponível em: http://g1.globo.com. 
Acesso em: 26 mar. 2015 (adaptado). 
Ao emitirem o som estridente, esses anfíbios`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`indicam que estão fora de seu hábitat natural.`},
 { id: 'B', type: 'text', value:`alertam para a presença de poluição urbana.`},
 { id: 'C', type: 'text', value:`sinalizam a existência de superpopulação.`},
 { id: 'D', type: 'text', value:`direcionam insetos para sua alimentação.`},
 { id: 'E', type: 'text', value:`atraem fêmeas para o acasalamento.`},
 ],
 correct: 'E',
 explanation: `O som alto e estridente emitido pelos anuros machos é um comportamento reprodutivo típico desses anfíbios. Esse canto, ou vocalização nupcial, funciona como sinal para as fêmeas da mesma espécie localizarem e selecionarem os machos. Assim, o objetivo biológico da emissão sonora é a reprodução. Portanto, ao emitirem esse som, esses anfíbios atraem fêmeas para o acasalamento (alternativa E).`,
 subject: ['bio'],
 topics: ['Zoologia', 'Questões aleatórias'],
 },
 {
 id: 118,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A hidroxiapatita, Ca₅(PO₄)₃OH, é um mineral
constituinte do esmalte dos dentes. Entre as diversas
reações que ocorrem no meio bucal, encontram-se em
equilíbrio as reações de desmineralização e mineralização
da hidroxiapatita em meio aquoso, ilustradas a seguir.
A desmineralização está associada à fragilização do esmalte
do dente e à formação de cáries.
5 Ca²⁺ (aq) + 3 PO₄³⁻ (aq) + H₂O (l) ⇌ Ca₅(PO₄)₃OH (s) + H⁺ (aq)
(Desmineralização →, ← Mineralização)
O uso de creme dental pode minimizar a perda da
hidroxiapatita. O quadro apresenta o agente de polimento 
e o pH de alguns cremes dentais comerciais. 
 
STORGATTO, G. A.; BRAIBANTE, M. E. F.; BRAIBANTE, H. T. S. 
A química na odontologia. Química Nova na Escola , 
v. 39, fev. 2017 (adaptado). 
Considerando o equilíbrio químico envolvido, qual creme dental 
promove a maior desmineralização do esmalte do dente?`,
 images: ['/enem/2024/images/enem_2024_d2_q118_1.jpg', '/enem/2024/images/enem_2024_d2_q118_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I`},
 { id: 'B', type: 'text', value:`II`},
 { id: 'C', type: 'text', value:`III`},
 { id: 'D', type: 'text', value:`IV`},
 { id: 'E', type: 'text', value:`V`},
 ],
 correct: 'D',
 explanation: `A desmineralização da hidroxiapatita é favorecida pelo aumento da concentração de H⁺, ou seja, por menor pH, que desloca o equilíbrio no sentido da dissolução do esmalte. Entre os cremes dentais apresentados, o de menor pH é o creme IV (pH 6,9), o mais ácido. Logo, ele é o que promove a maior desmineralização (alternativa D).`,
 subject: ['qui'],
 topics: ['Equilíbrio químico, pH e solubilidade', 'Questões aleatórias'],
 },
 {
 id: 119,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para os circuitos de maratonas aquáticas realizadas em 
mares calmos e próximos à praia, é montado um sistema 
de boias que determinam o trajeto a ser seguido pelos 
nadadores. Uma das dificuldades desse tipo de circuito 
é compensar os efeitos da corrente marinha. O diagrama 
contém o circuito em que deve ser realizada uma volta no 
sentido anti-horário. As quatro boias estão numeradas de 
1 a 4. Existe uma corrente marinha de velocidade υ c 
→ , cujo 
módulo é 30 metros por minuto, paralela à praia em toda 
a área do circuito. Nas arestas mais longas, o nadador 
precisará nadar na direção apontada pelos vetores υ n 
→ dos 
pontos 1 até 2 e de 3 até 4. Considere que a velocidade 
do nadador é de 50 metros por minuto, em relação à água, 
durante todo o circuito. 
Nessa situação, em quantos minutos o nadador completará 
a prova?`,
 images: ['/enem/2024/images/enem_2024_d2_q119.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`42`},
 { id: 'B', type: 'text', value:`65`},
 { id: 'C', type: 'text', value:`72`},
 { id: 'D', type: 'text', value:`105`},
 { id: 'E', type: 'text', value:`120`},
 ],
 correct: 'B',
 explanation: `O circuito é um retângulo de 800 m (lados longos) por 400 m (lados curtos), com a corrente de 30 m/min apontando para baixo. Nos lados longos (horizontais), o nadador precisa apontar parte de sua velocidade (50 m/min) para cancelar a corrente perpendicular, resultando em velocidade útil √(50² − 30²) = 40 m/min, ou seja, 800/40 = 20 min em cada um (40 min nos dois). No lado curto contra a corrente a velocidade efetiva é 50 − 30 = 20 m/min (400/20 = 20 min) e no lado curto a favor é 50 + 30 = 80 m/min (400/80 = 5 min). O tempo total é 20 + 20 + 20 + 5 = 65 min (alternativa B).`,
 subject: ['fis'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 120,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O vírus linfotrópico de células T humanas tipo 1 
(HTLV-1) é um retrovírus do mesmo grupo do vírus da 
imunodeficiência humana (HIV). Ambos são transmitidos 
da mesma forma e infectam as mesmas células de defesa 
do organismo, os linfócitos T. A diferença entre eles é que o 
HTLV-1 estimula o aumento da produção desses linfócitos, 
enquanto o HIV causa destruição dessas células. 
ROMANELLI, L. C. F.; CARAMELLI, P.; PROIETTI, A. B. F. C. O vírus 
linfotrópico de células T humanas tipo 1 (HTLV-1): quando 
suspeitar da infecção? Revista da Associação 
Médica Brasileira , v. 56, 2010 (adaptado). 
Uma possível consequência da infecção por HTLV-1 é o 
desenvolvimento de`,
 alternatives: [
 { id: 'A', type: 'text', value:`aids.`},
 { id: 'B', type: 'text', value:`câncer.`},
 { id: 'C', type: 'text', value:`diabetes.`},
 { id: 'D', type: 'text', value:`hepatite B.`},
 { id: 'E', type: 'text', value:`hemorragia.`},
 ],
 correct: 'B',
 explanation: `O HTLV-1 infecta os linfócitos T e, diferentemente do HIV, estimula o aumento descontrolado da produção dessas células de defesa. Essa proliferação celular anômala pode evoluir para um crescimento tumoral, caracterizando o câncer (leucemia/linfoma de células T do adulto). Assim, uma possível consequência da infecção é o desenvolvimento de câncer (alternativa B).`,
 subject: ['bio'],
 topics: ['Microbiologia e doenças', 'Questões aleatórias'],
 },
 {
 id: 121,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Na tirinha, Calvin se divertia em um balanço antes de 
soltar-se dele e cair ao chão. Em sua fala, ele demonstra ter 
imaginado que permaneceria em movimento circular. Porém, 
a força gravitacional, que permanece atuando no garoto, 
modifica a direção de sua velocidade, fazendo com que ele 
chegue ao chão da maneira ilustrada no último quadrinho. 
WATTERSON, B. Disponível em: https://tiras-do-calvin.tumblr.com. 
Acesso em: 19 nov. 2021 (adaptado). 
Qual vetor representa a força resultante exercida pelo chão 
sobre Calvin no exato momento em que ele toca o chão?`,
 images: ['/enem/2024/images/enem_2024_d2_q121.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q121_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q121_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q121_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q121_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q121_E.jpg` },
 ],
 correct: 'A',
 explanation: `No exato instante em que toca o solo, o chão exerce sobre Calvin uma força resultante impulsiva que se opõe à velocidade com que ele chega, freando-o. Como ele cai de cabeça movendo-se para baixo e para a esquerda (com o corpo voltado para cima e para a direita), a força que o solo aplica aponta para cima e para a direita. Esse é o vetor representado na alternativa A.`,
 subject: ['fis'],
 topics: ['Dinâmica', 'Questões aleatórias'],
 },
 {
 id: 122,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A tirinha ilustra esquimós dentro de um iglu, habitação 
de formato hemisférico construída durante o inverno a partir de 
neve ou blocos de gelo. Essa estrutura de construção se justifica 
pelo fato de esse povo habitar as regiões mais setentrionais 
da Groenlândia, Canadá e Alasca. 
LAERTE. Disponível em: https://artedafisicapibid.blogspot.com. 
Acesso em: 4 dez. 2021 (adaptado). 
Na tirinha, a geladeira é necessária para fazer gelo porque`,
 images: ['/enem/2024/images/enem_2024_d2_q122.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`a temperatura interna do iglu é maior que a de 
solidificação da água.`},
 { id: 'B', type: 'text', value:`a umidade dentro do iglu dificulta o processo de 
mudança de fase da água.`},
 { id: 'C', type: 'text', value:`o ar dentro do iglu é isolante térmico, dificultando a 
perda de calor pela água.`},
 { id: 'D', type: 'text', value:`a temperatura uniforme no interior do iglu impede as 
correntes de convecção.`},
 { id: 'E', type: 'text', value:`a pressão do ar no interior do iglu é baixa, dificultando
a solidificação da água.`},
 ],
 correct: 'A',
 explanation: `Para a água se solidificar (congelar), ela precisa atingir a temperatura de solidificação (0 °C). Como o interior do iglu é mantido a uma temperatura superior à de solidificação da água — graças ao isolamento e ao calor dos ocupantes —, a água não congelaria naturalmente ali, sendo necessária a geladeira para resfriá-la até o congelamento. Logo, a geladeira é necessária porque a temperatura interna do iglu é maior que a de solidificação da água (alternativa A).`,
 subject: ['fis'],
 topics: ['Calorimetria, termometria e dilatação', 'Questões aleatórias'],
 },
 {
 id: 123,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Os pesticidas naturais vêm sendo utilizados no controle 
de pragas e doenças agrícolas como substituintes de 
pesticidas sintéticos tradicionais, por serem menos nocivos 
ao ambiente, biodegradáveis e minimizarem custos e riscos 
relativos à lavoura. Por exemplo, os compostos 1 e 2 estão 
envolvidos nas respostas de defesa das plantas. Os grupos 
funcionais presentes nesses compostos são importantes 
para suas propriedades no controle de pragas. 
PINTO-ZEVALLOS, D. M.; ZARBIN, P. H. G. A química na agricultura: 
perspectivas para o desenvolvimento de tecnologias sustentáveis. 
Química Nova , n. 10, 2013 (adaptado). 
Qual é a função orgânica correspondente ao grupo funcional 
comum presente nesses dois compostos?`,
 images: ['/enem/2024/images/enem_2024_d2_q123.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Ácido carboxílico.`},
 { id: 'B', type: 'text', value:`Cetona.`},
 { id: 'C', type: 'text', value:`Alceno.`},
 { id: 'D', type: 'text', value:`Álcool.`},
 { id: 'E', type: 'text', value:`Fenol.`},
 ],
 correct: 'A',
 explanation: `Analisando as estruturas, o grupo funcional comum aos compostos 1 e 2 é o –COOH (carboxila), presente em ambos. A carboxila é o grupo característico da função orgânica ácido carboxílico. Portanto, a função comum é a de ácido carboxílico (alternativa A).`,
 subject: ['qui'],
 topics: ['Funções orgânicas e nomenclatura', 'Questões aleatórias'],
 },
 {
 id: 124,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Utilizando-se um mesmo meio nutritivo, três gêneros 
bacterianos diferentes foram submetidos ao cultivo em 
tubos de ensaio. Após certo período de crescimento da 
cultura bacteriana em condições físico-químicas ideais, 
observou-se que o padrão de distribuição das células 
(representadas por pontos na figura) ao longo dos tubos 
era diferente em cada um dos casos. 
Em relação ao metabolismo energético, os microrganismos 
presentes nos tubos 1, 2 e 3 são classificados, 
respectivamente, como`,
 images: ['/enem/2024/images/enem_2024_d2_q124.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`anaeróbio facultativo, anaeróbio estrito e aeróbio estrito.`},
 { id: 'B', type: 'text', value:`anaeróbio facultativo, aeróbio estrito e anaeróbio estrito.`},
 { id: 'C', type: 'text', value:`aeróbio estrito, anaeróbio estrito e anaeróbio facultativo.`},
 { id: 'D', type: 'text', value:`anaeróbio estrito, aeróbio estrito e anaeróbio facultativo.`},
 { id: 'E', type: 'text', value:`aeróbio estrito, anaeróbio facultativo e anaeróbio estrito.`},
 ],
 correct: 'C',
 explanation: `A distribuição das bactérias nos tubos indica sua relação com o oxigênio. No tubo 1 as células concentram-se na superfície, onde há O₂, indicando aeróbios estritos. No tubo 2 elas se acumulam no fundo, longe do O₂, indicando anaeróbios estritos. No tubo 3 as células distribuem-se por todo o tubo, indicando anaeróbios facultativos. Portanto, os microrganismos de 1, 2 e 3 são, respectivamente, aeróbio estrito, anaeróbio estrito e anaeróbio facultativo (alternativa C).`,
 subject: ['bio'],
 topics: ['Microbiologia e doenças', 'Questões aleatórias'],
 },
 {
 id: 125,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As placas que indicam saída de emergência brilham no 
escuro, pois apresentam substâncias que fosforecem na 
cor amarelo-esverdeada após exposição à luz ambiente, 
conforme a figura. 
Esse fenômeno ocorre pela presença do sulfeto de 
zinco (ZnS), dopado com prata ou cobre, na superfície 
da placa. 
Zinc Sulphide Phosphorescence . Disponível em: 
https://physicsopenlab.org. Acesso em: 8 nov. 2023 (adaptado). 
O aparecimento do brilho nessas condições ocorre como 
consequência de`,
 images: ['/enem/2024/images/enem_2024_d2_q125.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`colisões interatômicas.`},
 { id: 'B', type: 'text', value:`coloração dos átomos.`},
 { id: 'C', type: 'text', value:`transições eletrônicas.`},
 { id: 'D', type: 'text', value:`reações nucleares.`},
 { id: 'E', type: 'text', value:`reflexão da luz.`},
 ],
 correct: 'C',
 explanation: `Na fosforescência, a substância (ZnS dopado) absorve energia da luz ambiente, promovendo elétrons a níveis de maior energia. Esses elétrons, ao retornarem gradualmente aos níveis de menor energia, liberam o excesso de energia na forma de luz visível (amarelo-esverdeada). Logo, o brilho é consequência de transições eletrônicas (alternativa C).`,
 subject: ['fis'],
 topics: ['Física moderna', 'Questões aleatórias'],
 },
 {
 id: 126,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Indústrias farmacêuticas e instituições científicas têm 
trabalhado no desenvolvimento de diferentes vacinas 
contra a covid-19. Em algumas dessas vacinas, a principal 
estrutura antigênica é uma proteína de superfície viral 
chamada espícula ( spike , em inglês). Essa proteína só 
existe em coronavírus, incluindo o SARS-CoV-2. Ela se 
liga a receptores de membrana específicos das células 
humanas por um mecanismo do tipo “chave-fechadura”. 
Dessa forma, os vírus entram nas células, podendo se 
multiplicar e acarretar a doença. 
O que são vacinas? Disponível em: www.cienciaviva.pt. 
Acesso em: 30 nov. 2021 (adaptado). 
Nessas vacinas, essa proteína viral induz a`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`produção de anticorpos específicos contra os vírus.`},
 { id: 'B', type: 'text', value:`imunidade passiva contra o desenvolvimento da doença.`},
 { id: 'C', type: 'text', value:`alteração genômica para formação da memória 
imunológica.`},
 { id: 'D', type: 'text', value:`neutralização direta dos vírus presentes na circulação 
sanguínea.`},
 { id: 'E', type: 'text', value:`modificação dos receptores de membrana específicos
para o vírus.`},
 ],
 correct: 'A',
 explanation: `A proteína espícula (spike) presente na vacina atua como antígeno, sendo reconhecida pelo sistema imunológico. Essa exposição estimula a produção de anticorpos específicos contra o vírus (imunidade ativa), além de gerar memória imunológica, de modo que, em um contato posterior com o SARS-CoV-2, a resposta seja rápida e eficaz. Portanto, a proteína viral induz a produção de anticorpos específicos contra os vírus (alternativa A).`,
 subject: ['bio'],
 topics: ['Imunologia', 'Questões aleatórias'],
 },
 {
 id: 127,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em um experimento de laboratório, duas barras metálicas, A e B, são carregadas com cargas opostas e imersas em óleo. Farelo de milho é jogado sobre o óleo e, após um certo tempo, o farelo assume o formato das linhas de campo elétrico entre as barras. A figura representa a vista superior desse experimento.
ALMEIDA, M. A. T. Introdução às ciências físicas 2 — volume 4: módulo 4. Rio de Janeiro: Fundação CECIERJ, 2007 (adaptado).
Ao repetir o experimento colocando um cilindro metálico oco entre as placas, o esquema que representa o formato das linhas de campo assumido pelo farelo é:`,
 images: ['/enem/2024/images/enem_2024_d2_q127.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q127_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q127_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q127_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q127_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q127_E.jpg` },
 ],
 correct: 'E',
 explanation: `Um cilindro metálico oco colocado entre as placas provoca blindagem eletrostática. No equilíbrio, as cargas se redistribuem na superfície do condutor, de modo que o campo elétrico no interior do condutor e de sua cavidade é nulo. As linhas de campo externas, por sua vez, chegam perpendiculares à superfície do condutor e o contornam, pois nenhuma linha penetra em seu interior. O esquema correto é, portanto, aquele em que as linhas tocam perpendicularmente o cilindro e seu interior fica sem nenhuma linha de campo, o que corresponde à alternativa E.`,
 subject: ['fis'],
 topics: ['Eletrostática', 'Questões aleatórias'],
 },
 {
 id: 128,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Placas solares comuns dependem de dias ensolarados 
para gerar energia. Mas podemos gerar eletricidade com 
a ajuda de gotas de chuva, revestindo placas solares 
com uma fina camada de grafeno. Os íons dissociados a 
partir da água da chuva (A m + e B n − ) tornam a combinação 
grafeno e água da chuva um par perfeito para geração 
de energia. O processo requer apenas uma camada de 
grafeno para que grande quantidade de elétrons (e⁻)
se movimente ao longo da superfície. 
TANG, Q. et al. A Solar Cell that is Triggered by Sun and Rain. 
Angewandte Chemie International Edition , n. 55, 2016 (adaptado). 
Ao produzir eletricidade em dias chuvosos, o grafeno`,
 images: ['/enem/2024/images/enem_2024_d2_q128.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`oxida os cátions dissolvidos na água da chuva.`},
 { id: 'B', type: 'text', value:`impede a difusão da água através das placas solares.`},
 { id: 'C', type: 'text', value:`diminui a energia de ativação da reação no pseudocapacitor.`},
 { id: 'D', type: 'text', value:`forma um compósito não metálico com os íons na água 
da chuva.`},
 { id: 'E', type: 'text', value:`gera uma diferença de potencial pela interação dos 
elétrons com os cátions.`},
 ],
 correct: 'E',
 explanation: `O grafeno possui grande quantidade de elétrons livres que se movem ao longo de sua superfície. Os cátions dissociados da água da chuva são atraídos por esses elétrons, formando na interface uma dupla camada de cargas. A separação de cargas entre os elétrons do grafeno e os cátions gera uma diferença de potencial elétrico, que produz a eletricidade. Logo, o grafeno gera uma diferença de potencial pela interação dos elétrons com os cátions (alternativa E).`,
 subject: ['qui'],
 topics: ['Eletroquímica', 'Questões aleatórias'],
 },
 {
 id: 129,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um estudante comprou uma cafeteira elétrica de 700 W 
de potência e com capacidade de 0,5 L de água (500 g). 
Enquanto o café estava em preparação na capacidade 
máxima da cafeteira, ele marcou que demorou 3 minutos 
para a cafeteira ferver toda a água (100 ° C) a partir da 
temperatura ambiente de 20 ° C. Em seguida, para avaliar a 
eficiência da cafeteira, ele calculou esse tempo desprezando 
quaisquer perdas energéticas. É necessária 1 cal (4,2 J) 
para elevar em 1 ° C a temperatura de 1 grama de água. 
Qual a eficiência energética calculada pelo estudante?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`100%`},
 { id: 'B', type: 'text', value:`75%`},
 { id: 'C', type: 'text', value:`60%`},
 { id: 'D', type: 'text', value:`7,5%`},
 { id: 'E', type: 'text', value:`5,1%`},
 ],
 correct: 'A',
 annulled: true,
 explanation: `Questão anulada. O calor necessário para ferver a água é Q = m·c·ΔT = 500 × 1 × (100 − 20) = 40000 cal = 40000 × 4,2 = 168000 J, o que exigiria, sem perdas (100%), um tempo mínimo de 168000/700 = 240 s = 4 min. Como o tempo medido foi de apenas 3 min (180 s), o cálculo conduz a uma eficiência de 168000/(700×180) ≈ 1,33, isto é, superior a 100%, resultado fisicamente impossível. Essa inconsistência entre os dados fornecidos é o motivo da anulação da questão (não há alternativa correta única; o gabarito preliminar indicava A).`,
 subject: ['fis'],
 topics: ['Calorimetria, termometria e dilatação', 'Eletrodinâmica', 'Questões aleatórias'],
 },
 {
 id: 130,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O diagrama P-V a seguir representa o ciclo de Otto 
para um motor de combustão interna, como os motores a 
gasolina ou a etanol, utilizados nos automóveis. 
As etapas representadas no diagrama estão descritas 
no quadro. 
 
Disponível em: www.mspc.eng.br. 
Acesso em: 24 fev. 2013 (adaptado). 
A transformação da energia térmica em energia útil ocorre 
na etapa`,
 images: ['/enem/2024/images/enem_2024_d2_q130_1.jpg', '/enem/2024/images/enem_2024_d2_q130_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`II.`},
 { id: 'B', type: 'text', value:`III.`},
 { id: 'C', type: 'text', value:`IV.`},
 { id: 'D', type: 'text', value:`V.`},
 { id: 'E', type: 'text', value:`VI.`},
 ],
 correct: 'C',
 explanation: `No ciclo de Otto, a energia térmica liberada pela combustão é convertida em energia útil (trabalho mecânico) quando os gases a alta pressão empurram o pistão, expandindo-se. Essa é a expansão adiabática, representada pela etapa IV (de 3 a 4), em que o sistema realiza trabalho sobre o pistão. Portanto, a transformação de energia térmica em energia útil ocorre na etapa IV (alternativa C).`,
 subject: ['fis'],
 topics: ['Termodinâmica', 'Questões aleatórias'],
 },
 {
 id: 131,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O LED é um dispositivo eletrônico que conduz corrente 
elétrica em um único sentido, sendo caracterizado por uma 
tensão e uma corrente máxima de funcionamento, I max . Um LED 
acende apenas se a corrente que o percorre está no sentido 
permitido e se a diferença de potencial à qual está submetido 
é igual ou superior à sua tensão de funcionamento. A figura 
ilustra o símbolo do LED usado na representação de circuitos. 
Um estudante de física analisa as propriedades do LED 
em um circuito simples de corrente contínua. Ele dispõe dos 
seguintes materiais: uma bateria ideal de 4,5 V; dois LEDs 
de tensão 3,0 V e I max = 1,0 mA cada; e dois resistores de 
1,5 kΩ cada. 
O circuito que o estudante pode montar, para que ambos os 
LEDs fiquem acesos e cada um seja percorrido por I max , é`,
    images: ['/enem/2024/images/enem_2024_d2_q131.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q131_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q131_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q131_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q131_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q131_E.jpg` },
 ],
 correct: 'B',
 explanation: `Dois LEDs em série exigiriam 3,0 + 3,0 = 6,0 V, valor superior aos 4,5 V da bateria, de modo que não acenderiam. A montagem correta liga em paralelo dois ramos independentes, cada um com um LED (3,0 V) em série com um resistor de 1,5 kΩ. Em cada resistor a queda é V = I_máx·R = 1,0 mA × 1,5 kΩ = 1,5 V, somando 3,0 + 1,5 = 4,5 V, igual à tensão da bateria, de modo que cada LED é percorrido exatamente por I_máx. Esse circuito corresponde à alternativa B.`,
 subject: ['fis'],
 topics: ['Eletrodinâmica', 'Questões aleatórias'],
 },
 {
 id: 132,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma caixa decorativa utiliza duas pequenas lâmpadas,
L1 (6 V – 9 W) e L2 (12 V – 18 W), ligadas em série a
uma bateria de tensão VQR. Um fio resistivo QR, de
48 centímetros, está ligado em paralelo à bateria. Cinco
pontos, A, B, C, D e E, dividem o fio QR em seis segmentos
de comprimentos iguais. O circuito também tem um
amperímetro com dois terminais. Um dos terminais (P) está
ligado ao fio entre as duas lâmpadas. O outro terminal (S)
está livre e será ligado ao fio QR. Dependendo do ponto em
que esse terminal livre for conectado, ocorrerá a mudança
na tensão à qual as lâmpadas são submetidas. Os demais
fios do circuito têm resistências elétricas desprezíveis.
A figura ilustra esse circuito.
Em qual desses pontos o amperímetro deve ser conectado
para que as lâmpadas acendam exatamente segundo as
especificações de tensão e potência elétricas fornecidas?`,
 images: ['/enem/2024/images/enem_2024_d2_q132.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `Ponto A` },
 { id: 'B', type: 'text', value: `Ponto B` },
 { id: 'C', type: 'text', value: `Ponto C` },
 { id: 'D', type: 'text', value: `Ponto D` },
 { id: 'E', type: 'text', value: `Ponto E` },
 ],
 correct: 'B',
 explanation: `Em série, as duas lâmpadas devem ser percorridas pela mesma corrente nominal: I = P/V = 9/6 = 1,5 A para L1 e 18/12 = 1,5 A para L2, somando a tensão V_QR = 6 + 12 = 18 V. O ponto P, entre as lâmpadas, está a 12 V (a tensão de L2) em relação a um dos terminais. No fio QR, com 18 V distribuídos linearmente ao longo de 48 cm divididos em seis partes iguais de 8 cm, o potencial de 12 V ocorre no ponto B (a 16 cm da extremidade). Ligando o amperímetro em B, os potenciais se igualam, não há desvio de corrente e as lâmpadas operam nas especificações (alternativa B).`,
 subject: ['fis'],
 topics: ['Eletrodinâmica', 'Questões aleatórias'],
 },
 {
 id: 133,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O biogás é uma alternativa energética muito importante, 
pois, além de reduzir a dependência por combustíveis 
fósseis, sua obtenção pode ser realizada a partir de 
resíduos da produção agroindustrial. Considere que o 
biogás produzido em um empreendimento de suinocultura 
contém 70% em volume de metano (massa molar 16 g/mol; 
volume molar 22 L/mol). Ele será utilizado para geração de 
energia em substituição ao etanol (massa molar 46 g/mol) 
em um gerador no qual 1 m³ de biogás de origem suína 
substitui 0,59 L de etanol anidro (densidade 0,78 g/mL). 
Nessas condições, a massa de metano necessária para 
substituir 10 mol de etanol na produção de energia é mais 
próxima de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`300 g.`},
 { id: 'B', type: 'text', value:`400 g.`},
 { id: 'C', type: 'text', value:`510 g.`},
 { id: 'D', type: 'text', value:`590 g.`},
 { id: 'E', type: 'text', value:`720 g.`},
 ],
 correct: 'C',
 explanation: `Dez mols de etanol correspondem a 10 × 46 = 460 g, cujo volume é 460/0,78 ≈ 590 mL = 0,59 L. Como 1 m³ de biogás substitui 0,59 L de etanol, é necessário cerca de 1 m³ (1000 L) de biogás. Sendo 70% em volume de metano, tem-se 0,70 × 1000 = 700 L de metano, equivalentes a 700/22 ≈ 31,8 mol, cuja massa é 31,8 × 16 ≈ 510 g. Portanto, a massa de metano é mais próxima de 510 g (alternativa C).`,
 subject: ['qui'],
 topics: ['Estequiometria e cálculos químicos', 'Questões aleatórias'],
 },
 {
 id: 134,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A fitorremediação é uma técnica que utiliza plantas para a remediação de ambientes contaminados. A descontaminação 
de solos pode ocorrer por descarte, absorção e metabolização, imobilização, extração ou volatilização do poluente, 
conforme representado na figura. 
LUIZ, E. P. Avaliação dos métodos de fitorremediação [...] na remoção de chumbo, cobre e zinco . São Paulo: UFABC, 2016 (adaptado). 
O método que retira o mercúrio de uma área contaminada, impedindo sua entrada na cadeia alimentar, é a`,
 images: ['/enem/2024/images/enem_2024_d2_q134.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`fitoestabilização, ficando o mercúrio disponível sob a superfície das raízes das plantas.`},
 { id: 'B', type: 'text', value:`fitovolatilização, permitindo a retirada do mercúrio por plantas e a sua transferência para uma forma volátil.`},
 { id: 'C', type: 'text', value:`fitodegradação, com a degradação do mercúrio promovida por enzimas, contidas nas raízes, formando espécies 
menos tóxicas.`},
 { id: 'D', type: 'text', value:`fitoestimulação, com a remoção do mercúrio pela ação de microrganismos presentes nas raízes que absorvem e 
imobilizam o metal.`},
 { id: 'E', type: 'text', value:`fitoextração, em que as plantas que acumulam o mercúrio são cultivadas nesses locais, e a biomassa rica no metal 
é retirada após o crescimento.`},
 ],
 correct: 'E',
 explanation: `Na fitoextração, cultivam-se plantas capazes de acumular o mercúrio em seus tecidos (biomassa) ao longo do crescimento. Depois de crescidas, essas plantas ricas no metal são colhidas e retiradas da área contaminada, removendo efetivamente o mercúrio e impedindo sua entrada na cadeia alimentar. Esse é o método descrito na alternativa E (fitoextração).`,
 subject: ['bio'],
 topics: ['Botânica', 'Questões aleatórias'],
 },
 {
 id: 135,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Brasil fecha 2020 entre os maiores recicladores de latas de alumínio 
A bauxita contém alumina (Al₂O₃ ), que é a matéria-prima para produção do alumínio (Al). De forma geral, são 
necessários 50 kg de bauxita para produzir 10 kg de alumínio. O Brasil fechou 2020 como um dos principais líderes 
mundiais em reciclagem de latas de alumínio. De acordo com levantamento da Associação Brasileira dos Fabricantes 
de Latas de Alumínio (Abralatas), o país obteve um índice de reciclagem de 97,4%, de um total de 4,0 × 10⁵ toneladas 
de latas vendidas. Considere que a lata é constituída de alumínio puro. 
Disponível em: https://agenciabrasil.ebc.com.br. Acesso em: 30 nov. 2021 (adaptado). 
Levando em conta apenas a reciclagem de latas, qual é o valor mais próximo da massa de bauxita, em tonelada, que 
deixou de ser extraída da natureza em 2020 no Brasil?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1,0 × 10⁴ ton`},
 { id: 'B', type: 'text', value:`3,9 × 10⁵ ton`},
 { id: 'C', type: 'text', value:`5,0 × 10⁵ ton`},
 { id: 'D', type: 'text', value:`1,9 × 10⁶ ton`},
 { id: 'E', type: 'text', value:`2,0 × 10⁷ ton`},
 ],
 correct: 'D',
 explanation: `A massa de alumínio reciclado foi 0,974 × 4,0 × 10⁵ = 3,896 × 10⁵ toneladas (índice de 97,4% sobre o total de latas). Como são necessários 50 kg de bauxita para produzir 10 kg de alumínio, a razão bauxita/alumínio é 5:1. Logo, a bauxita que deixou de ser extraída é 5 × 3,896 × 10⁵ ≈ 1,9 × 10⁶ toneladas (alternativa D).`,
 subject: ['qui'],
 topics: ['Estequiometria e cálculos químicos', 'Questões aleatórias'],
 },
 {
 id: 136,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O tamanho mínimo que a visão humana é capaz de 
visualizar sem o uso de equipamento auxiliar é equivalente 
a 100 micrômetros (1 micrômetro = 10⁻³ milímetros).
Uma estudante pretende visualizar e analisar hemácias 
do sangue humano, que medem 0,007 mm de diâmetro. 
Ela adquiriu um microscópio óptico que tem uma lente 
ocular que amplia em 10 vezes a imagem do objeto em 
observação, e um conjunto de lentes objetivas com estas 
capacidades de ampliação: 
• lente I: 2 vezes; 
• lente II: 10 vezes; 
• lente III: 15 vezes; 
• lente IV: 1,1 vez; 
• lente V: 1,4 vez. 
O funcionamento desse microscópio permite o uso da 
lente ocular sozinha ou a combinação dela com uma 
de suas lentes objetivas, proporcionando, nesse caso, 
um aumento de sua capacidade de ampliação final, que é 
dada pelo produto entre as capacidades de ampliação da 
ocular e da objetiva. 
Essa estudante pretende selecionar a lente objetiva de 
menor capacidade de ampliação que permita, na combinação 
com a ocular, visualizar hemácias do sangue humano. 
A lente objetiva a ser selecionada pela estudante é a`,
 images: ['/enem/2024/images/enem_2024_d2_q136.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'A',
 explanation: `A hemácia mede 0,007 mm = 7 micrômetros (1 µm = 10⁻³ mm). Para ser vista, a imagem ampliada precisa atingir, no mínimo, 100 µm, ou seja, a ampliação total deve satisfazer 7·(total) ≥ 100 → total ≥ 100/7 ≈ 14,3. A ampliação total é o produto da ocular (10×) pela objetiva. Testando as objetivas da menor para a maior: IV (1,1): 10·1,1=11 → 7·11=77 µm (não); V (1,4): 10·1,4=14 → 7·14=98 µm (não); I (2): 10·2=20 → 7·20=140 µm (sim). A menor objetiva que funciona é a I. Resposta: A.`,
 subject: ['mat'],
 topics: ['Grandezas e unidades de medida', 'Questões aleatórias'],
 },
 {
 id: 137,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Ao calcular a média de suas notas em 4 provas, um 
estudante dividiu, por engano, a soma das notas por 5. 
Com isso, a média obtida foi 1 unidade menor do que 
deveria ser, caso fosse calculada corretamente. 
O valor correto da média das notas desse estudante é`,
 alternatives: [
 { id: 'A', type: 'text', value:`4.`},
 { id: 'B', type: 'text', value:`5.`},
 { id: 'C', type: 'text', value:`6.`},
 { id: 'D', type: 'text', value:`19.`},
 { id: 'E', type: 'text', value:`21.`},
 ],
 correct: 'B',
 explanation: `Sejam as 4 notas com soma S. A média correta é S/4; o aluno calculou S/5, que ficou 1 unidade menor: S/4 − S/5 = 1 → (5S−4S)/20 = 1 → S/20 = 1 → S = 20. Logo a média correta é S/4 = 20/4 = 5. Resposta: B.`,
 subject: ['mat'],
 topics: ['Estatística', 'Questões aleatórias'],
 },
 {
 id: 138,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para abrir a porta de uma empresa, cada funcionário 
deve cadastrar uma senha utilizando um teclado 
alfanumérico como o representado na figura. 
Por exemplo: a tecla que contém o número 2 traz as 
letras correlacionadas A, B e C. Cada toque nessa tecla 
mostra, sequencialmente, os seguintes caracteres: 2, A, B 
e C. Para os próximos toques, essa sequência se repete. 
As demais teclas funcionam da mesma maneira. 
As senhas a serem cadastradas pelos funcionários 
devem conter 5 caracteres, sendo 2 algarismos distintos 
seguidos de 3 letras diferentes, nessa ordem. Um funcionário 
irá cadastrar a sua primeira senha, podendo escolher entre 
as teclas que apresentam os números 1, 2, 5, 7 e 0 e as 
respectivas letras correlacionadas, quando houver. 
O número de possibilidades diferentes que esse 
funcionário tem para cadastrar sua senha é`,
 images: ['/enem/2024/images/enem_2024_d2_q138.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`11 520.`},
 { id: 'B', type: 'text', value:`14 400.`},
 { id: 'C', type: 'text', value:`18 000.`},
 { id: 'D', type: 'text', value:`312 000.`},
 { id: 'E', type: 'text', value:`390 000.`},
 ],
 correct: 'B',
 explanation: `A senha tem 2 algarismos distintos seguidos de 3 letras diferentes. Algarismos disponíveis: 1, 2, 5, 7, 0 (5 opções) → 2 distintos ordenados: 5·4 = 20. Letras disponíveis: tecla 2 (A,B,C), tecla 5 (J,K,L), tecla 7 (P,Q,R,S); as teclas 1 e 0 não têm letras → 3+3+4 = 10 letras → 3 diferentes ordenadas: 10·9·8 = 720. Total = 20·720 = 14 400. Resposta: B.`,
 subject: ['mat'],
 topics: ['Análise combinatória', 'Questões aleatórias'],
 },
 {
 id: 139,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um artesão utiliza dois tipos de componentes, X e 
Y, nos enfeites que produz. Ele sempre compra todos os 
componentes em uma mesma loja. O quadro apresenta 
os preços dos dois tipos de componentes nas lojas I e II. 
 
Ele confeccionará enfeites formados por duas unidades 
do componente X e uma unidade do componente Y e 
efetuará a compra na loja que oferecer o menor valor total 
para a confecção de um enfeite. 
O artesão efetuará a compra na loja`,
    images: ['/enem/2024/images/enem_2024_d2_q139.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I, pois o valor é R$ 7,00.`},
 { id: 'B', type: 'text', value:`I, pois o valor é R$ 4,00.`},
 { id: 'C', type: 'text', value:`II, pois o valor é R$ 6,00.`},
 { id: 'D', type: 'text', value:`I, pois anuncia o componente com o menor preço.`},
 { id: 'E', type: 'text', value:`II, pois o componente X, que é o mais utilizado, tem 
menor preço.`},
 ],
 correct: 'A',
 explanation: `Cada enfeite usa 2 unidades de X e 1 de Y. Loja I: 2·3,00 + 1,00 = 6,00 + 1,00 = 7,00. Loja II: 2·2,00 + 4,00 = 4,00 + 4,00 = 8,00. O menor valor é na loja I, custando R$ 7,00. Resposta: A.`,
 subject: ['mat'],
 topics: ['Matemática básica', 'Questões aleatórias'],
 },
 {
 id: 140,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`João e Felipe participaram, na escola, de uma maratona 
de matemática na qual, durante uma semana, resolveram 
200 questões cada. Nessa maratona, a porcentagem P de 
acertos de cada participante é convertida em um conceito: 
• insatisfatório: se 0 ≤ P < 50; 
• regular: se 50 ≤ P < 60; 
• bom: se 60 ≤ P < 75; 
• muito bom: se 75 ≤ P < 90; 
• excelente: se 90 ≤ P ≤ 100. 
João acertou 75% das questões da maratona e Felipe 
acertou 30% a menos que a quantidade de questões que 
João acertou. 
Os conceitos de João e Felipe foram, respectivamente,`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`muito bom e bom.`},
 { id: 'B', type: 'text', value:`muito bom e regular.`},
 { id: 'C', type: 'text', value:`muito bom e insatisfatório.`},
 { id: 'D', type: 'text', value:`bom e regular.`},
 { id: 'E', type: 'text', value:`bom e insatisfatório.`},
 ],
 correct: 'B',
 explanation: `João acertou 75% de 200 = 150 questões, logo 75% → conceito muito bom. Felipe acertou 30% a menos que João: 150·(1−0,30) = 150·0,70 = 105 questões, ou seja, 105/200 = 52,5%, que está em 50 ≤ P < 60 → conceito regular. Resposta: B.`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 141,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Três grandezas (I, II e III) se relacionam entre si. 
Os gráficos a seguir, formados por segmentos de reta, 
descrevem as relações de dependência existentes entre 
as grandezas I e II, e entre as grandezas II e III. 
O valor máximo assumido pela grandeza III, quando a 
grandeza I varia de 1 a 3, é`,
 images: ['/enem/2024/images/enem_2024_d2_q141.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1,0.`},
 { id: 'B', type: 'text', value:`2,5.`},
 { id: 'C', type: 'text', value:`3,0.`},
 { id: 'D', type: 'text', value:`3,5.`},
 { id: 'E', type: 'text', value:`4,0.`},
 ],
 correct: 'B',
 explanation: `Quando I varia de 1 a 3, no 1º gráfico II varia: em I=1, II=1,5; em I=3, II=3,5; logo II ∈ [1,5; 3,5]. No 2º gráfico III em função de II: no trecho (0;4)→(3;1), III = 4 − II, dando III=2,5 em II=1,5 e III=1 em II=3; no trecho (3;1)→(4;3), III cresce até 2 em II=3,5. O maior valor de III é 2,5 (em II=1,5). Resposta: B.`,
 subject: ['mat'],
 topics: ['Leitura e interpretação de gráficos de funções', 'Questões aleatórias'],
 },
 {
 id: 142,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma criança, utilizando um aplicativo, escreveu uma 
mensagem para enviar a um amigo. Essa mensagem foi 
escrita seguindo estas etapas: 
Etapas 
Visor de escrita 
1 ª etapa: inseriu três figuras 
do tipo 
 no visor de 
escrita da mensagem; 
2 ª etapa: copiou o que havia 
inserido anteriormente e 
colou (inseriu o que havia 
copiado) ao lado; 
3 ª etapa: copiou o que tinha 
no visor na 2 ª etapa e colou 
ao lado. 
A criança seguiu copiando e colando, em cada etapa, 
o que tinha no visor na etapa imediatamente anterior, até 
concluir a 20 ª etapa. Em seguida, enviou a mensagem. 
Qual foi o total de figuras contidas na mensagem enviada?`,
 images: ['/enem/2024/images/enem_2024_d2_q142.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`3 × 2¹⁹`},
 { id: 'B', type: 'text', value:`3 × 2²⁰`},
 { id: 'C', type: 'text', value:`3 × 2²¹`},
 { id: 'D', type: 'text', value:`3 × 2²⁰ − 1`},
 { id: 'E', type: 'text', value:`3 × 2²⁰ − 3`},
 ],
 correct: 'A',
 explanation: `Começa com 3 figuras. A cada etapa o conteúdo é duplicado (copia e cola ao lado): etapa 1 = 3; etapa 2 = 3·2; etapa 3 = 3·2²; … etapa n = 3·2^(n−1). Na 20ª etapa: 3·2^(20−1) = 3·2¹⁹. Resposta: A.`,
 subject: ['mat'],
 topics: ['Sequências e progressões', 'Questões aleatórias'],
 },
 {
 id: 143,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma casa de shows terá um evento cujo custo total 
de produção é de R$ 34 350,00, sendo que comporta 
500 pessoas. O preço do ingresso será de R$ 130,00 e, 
normalmente, 60% das pessoas adquirem meia-entrada, 
pagando R$ 65,00 pelo ingresso. Além do faturamento 
proveniente da venda de ingressos, a casa de shows 
vende, com 60% de lucro, bebidas e petiscos ao público 
no dia do evento. 
Após ter vendido todos os 500 ingressos, constatou-se 
que a quantidade de meias-entradas vendidas superou 
em 50% o que estava previsto, impactando o faturamento 
estimado com a venda de ingressos. 
No dia do evento, decidiu-se manter o percentual 
de 60% de lucro sobre as bebidas e petiscos, pois todo 
o público que comprou ingresso compareceu ao 
show. Com isso, espera-se ter lucro de R$ 17 000,00 
nesse evento. 
Para que se alcance o lucro esperado, o gasto médio por 
pessoa com bebidas e petiscos, em real, deverá ser de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`19,50.`},
 { id: 'B', type: 'text', value:`28,80.`},
 { id: 'C', type: 'text', value:`34,00.`},
 { id: 'D', type: 'text', value:`52,00.`},
 { id: 'E', type: 'text', value:`68,70.`},
 ],
 correct: 'D',
 explanation: `Previsto: 60% de meia = 300 meias e 200 inteiras. Real: meias superaram em 50% o previsto → 300·1,5 = 450 meias e 50 inteiras. Faturamento com ingressos = 450·65 + 50·130 = 29 250 + 6 500 = 35 750. Lucro só de ingressos = 35 750 − 34 350 = 1 400. Para lucro total de 17 000, o lucro com bebidas/petiscos deve ser 17 000 − 1 400 = 15 600. Esse lucro é 60% do gasto do público: 0,60·(500·g) = 15 600 → 300·g = 15 600 → g = 52,00. Resposta: D.`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 144,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para obter um sólido de revolução (rotação de 360 ° 
em torno de um eixo fixo), uma professora realizou as 
seguintes etapas: 
• recortou o trapézio retângulo PQRS de um 
material rígido; 
• afixou o lado PS do trapézio em uma vareta fixa 
retilínea (eixo de rotação); 
• girou o trapézio 360 ° em torno da vareta e obteve 
um sólido de revolução. 
Observe a figura que apresenta o trapézio afixado na 
vareta e o sentido de giro. 
O sólido obtido foi um(a)`,
 images: ['/enem/2024/images/enem_2024_d2_q144.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`cone.`},
 { id: 'B', type: 'text', value:`cilindro.`},
 { id: 'C', type: 'text', value:`pirâmide.`},
 { id: 'D', type: 'text', value:`tronco de cone.`},
 { id: 'E', type: 'text', value:`tronco de pirâmide.`},
 ],
 correct: 'D',
 explanation: `O trapézio retângulo PQRS gira 360° em torno do lado PS (eixo). As bases paralelas PQ e RS, de medidas diferentes, geram círculos de raios diferentes, e o lado inclinado QR gera a superfície lateral inclinada. O sólido resultante é um tronco de cone. Resposta: D.`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 145,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O estádio do Maracanã passou por algumas 
modificações estruturais para a realização da Copa do 
Mundo de 2014, como, por exemplo, as dimensões do 
campo retangular. Para se adaptar aos padrões da Fifa, 
as dimensões do campo foram reduzidas de 110 m × 75 m 
para 105 m × 68 m. 
Disponível em: http://virgula.uol.com.br. 
Acesso em: 14 ago. 2013 (adaptado). 
Em quantos metros quadrados a área do campo do 
Maracanã foi reduzida?`,
 alternatives: [
 { id: 'A', type: 'text', value:`24`},
 { id: 'B', type: 'text', value:`35`},
 { id: 'C', type: 'text', value:`555`},
 { id: 'D', type: 'text', value:`1 110`},
 { id: 'E', type: 'text', value:`1 145`},
 ],
 correct: 'D',
 explanation: `Área antiga = 110·75 = 8 250 m². Área nova = 105·68 = 7 140 m². Redução = 8 250 − 7 140 = 1 110 m². Resposta: D.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 146,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um fazendeiro pretende construir um galinheiro 
ocupando uma região plana de formato retangular, com 
lados de comprimentos L metro e C metro. Os lados serão 
cercados por telas de tipos diferentes. Nos lados de 
comprimento L metro, será utilizada uma tela cujo metro 
linear custa R$ 20,00, enquanto, nos outros dois lados, 
uma que custa R$ 15,00. O fazendeiro quer gastar, no 
máximo, R$ 6 000,00 na compra de toda a tela necessária 
para o galinheiro, e deseja que o galinheiro tenha a maior 
área possível. 
Qual será a medida, em metro, do maior lado do galinheiro?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`85`},
 { id: 'B', type: 'text', value:`100`},
 { id: 'C', type: 'text', value:`175`},
 { id: 'D', type: 'text', value:`200`},
 { id: 'E', type: 'text', value:`350`},
 ],
 correct: 'B',
 explanation: `Nos dois lados de medida L a tela custa R$ 20/m e nos dois lados de medida C custa R$ 15/m. Custo = 2·20·L + 2·15·C = 40L + 30C ≤ 6 000. A área A = L·C é máxima quando as parcelas se igualam: 40L = 30C = 3 000, logo L = 75 e C = 100 (área 7 500 m²). O maior lado mede 100 m. Resposta: B.`,
 subject: ['mat'],
 topics: ['Funções do 2º grau', 'Questões aleatórias'],
 },
 {
 id: 147,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma professora de matemática utiliza em suas 
aulas uma “máquina caça-números” para verificar os 
conhecimentos de seus estudantes sobre representações 
de números racionais. Essa máquina tem um visor dividido 
em seis compartimentos e, na lateral, uma alavanca. Cada 
estudante puxa a alavanca e espera que os compartimentos 
parem de girar. A partir daí, precisa responder para a 
professora em quais posições se encontram os números 
que representam a mesma quantidade. 
Um estudante puxou a alavanca, aguardou que os 
compartimentos parassem de girar e observou os números 
apresentados no visor. A configuração da máquina naquele 
instante está apresentada na imagem. 
Esse estudante respondeu corretamente à pergunta 
da professora. 
As posições indicadas pelo estudante foram`,
 images: ['/enem/2024/images/enem_2024_d2_q147.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I, II e IV.`},
 { id: 'B', type: 'text', value:`II, IV e V.`},
 { id: 'C', type: 'text', value:`II, III e V.`},
 { id: 'D', type: 'text', value:`III, V e VI.`},
 { id: 'E', type: 'text', value:`III, IV e VI.`},
 ],
 correct: 'B',
 explanation: `Calculando cada posição: I = 4^(1/2) = 2; II = 4½ = 4,5; III = 10/45 ≈ 0,222; IV = 18/4 = 4,5; V = 4,5; VI = 4/5 = 0,8. As três iguais a 4,5 estão nas posições II, IV e V. Resposta: B.`,
 subject: ['mat'],
 topics: ['Matemática básica', 'Questões aleatórias'],
 },
 {
 id: 148,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma caneca com água fervendo é retirada de um 
forno de micro-ondas. A temperatura T , em grau Celsius, 
da caneca, em função do tempo t , em minuto, pode ser 
modelada pela função T ( t ) = a + 80 b t , representada no 
gráfico a seguir. 
Os valores das constantes a e b são`,
 images: ['/enem/2024/images/enem_2024_d2_q148.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`a = 20; b = log(0,5)`},
 { id: 'B', type: 'text', value:`a = 100; b = 0,5`},
 { id: 'C', type: 'text', value:`a = 20; b = (0,5)^(1/10)`},
 { id: 'D', type: 'text', value:`a = 20; b = (40)^(1/10)/80`},
 { id: 'E', type: 'text', value:`a = 20; b = 40`},
 ],
 correct: 'C',
 explanation: `T(t) = a + 80·b^t. Quando t→∞ a temperatura tende à assíntota (temperatura ambiente) a = 20 °C, vista no gráfico. Em t = 0: a + 80·b⁰ = 20 + 80 = 100 °C, confere com o início. Pelo gráfico, em t = 10 a temperatura cai para 60 °C: 20 + 80·b¹⁰ = 60 → b¹⁰ = 40/80 = 1/2 → b = (0,5)^(1/10). Logo a = 20 e b = (0,5)^(1/10). Resposta: C.`,
 subject: ['mat'],
 topics: ['Função exponencial e logaritmo', 'Questões aleatórias'],
 },
 {
 id: 149,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma empresa é comercializado um produto em 
embalagens em formato de cilindro circular reto, com raio 
medindo 3 cm, e altura medindo 15 cm. Essa empresa 
planeja comercializar o mesmo produto em embalagens 
em formato de cubo, com capacidade igual a 80% da 
capacidade da embalagem cilíndrica utilizada atualmente. 
Use 3 como valor aproximado para π . 
A medida da aresta da nova embalagem, em centímetro, 
deve ser`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`6`},
 { id: 'B', type: 'text', value:`18`},
 { id: 'C', type: 'text', value:`6√6`},
 { id: 'D', type: 'text', value:`6·∛6`},
 { id: 'E', type: 'text', value:`3·∛12`},
 ],
 correct: 'E',
 explanation: `Volume do cilindro: V = π·r²·h = 3·3²·15 = 3·9·15 = 405 cm³. O cubo tem 80% dessa capacidade: 0,80·405 = 324 cm³. A aresta é a = ∛324. Como 324 = 27·12, temos a = ∛(27·12) = 3·∛12. Resposta: E.`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 150,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma sala com piso no formato retangular, com lados 
de medidas 3 m e 6 m, será dividida em dois ambientes. 
Para isso, serão utilizadas colunas em formato cilíndrico, 
dispostas perpendicularmente ao piso e representadas na 
figura pelos círculos de cor azul. Os centros desses círculos 
estarão sobre uma reta paralela aos lados de menor medida 
do piso da sala. Os vãos entre duas colunas e entre uma 
coluna e a parede não poderão ser superiores a 15 cm. 
Para efetuar a compra dessas colunas, foram feitos 
orçamentos com base em dados fornecidos por cinco lojas. 
 
A compra será realizada na loja cujo orçamento resulte 
no menor valor total possível. 
A compra será realizada na loja`,
 images: ['/enem/2024/images/enem_2024_d2_q150_1.jpg', '/enem/2024/images/enem_2024_d2_q150_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'C',
 explanation: `O vão a cobrir mede 3 m = 300 cm; com n colunas de diâmetro 2r há n+1 vãos, cada um ≤ 15 cm. O nº mínimo de colunas é n = ⌈285/(2r+15)⌉, pois n·2r + (n+1)·15 = 300. Loja I (r=5): 285/25 = 11,4 → 12·60 = 720. Loja II (r=10): 285/35 ≈ 8,1 → 9·70 = 630. Loja III (r=12): 285/39 ≈ 7,3 → 8·75 = 600. Loja IV (r=15): 285/45 ≈ 6,3 → 7·90 = 630. Loja V (r=20): 285/55 ≈ 5,2 → 6·120 = 720. Menor custo: loja III (R$ 600). Resposta: C.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 151,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O arquiteto Renzo Piano exibiu a maquete da nova 
sede do Museu Whitney de Arte Americana, um prédio 
assimétrico que tem um vão aberto para a galeria principal, 
cuja medida da área é 1 672 m² . 
Considere que a escala da maquete exibida é 1 : 200. 
Época , n. 682, jun. 2011 (adaptado). 
A medida da área do vão aberto nessa maquete, em 
centímetro quadrado, é`,
 alternatives: [
 { id: 'A', type: 'text', value:`4,18.`},
 { id: 'B', type: 'text', value:`8,36.`},
 { id: 'C', type: 'text', value:`41,80.`},
 { id: 'D', type: 'text', value:`83,60.`},
 { id: 'E', type: 'text', value:`418,00.`},
 ],
 correct: 'E',
 explanation: `Na escala 1:200, comprimentos reduzem 200 vezes e áreas reduzem 200² = 40 000 vezes. Área na maquete = 1 672 m² ÷ 40 000 = 0,0418 m². Convertendo para cm² (1 m² = 10 000 cm²): 0,0418·10 000 = 418 cm². Resposta: E.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 152,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O gráfico apresenta o valor total de exportações e o 
valor total de importações, ao longo de um período, em 
bilhão de dólares. O saldo da balança comercial brasileira 
é dado pelo valor total de exportações menos o valor total 
de importações num mesmo período. 
Valor total de exportações e importações 
Disponível em: http://blogs.estadão.com.br. 
Acesso em: 20 fev. 2013 (adaptado). 
Considere que os saldos da balança comercial 
brasileira, nos três meses destacados no gráfico, sejam 
representados por: 
• S 1 : saldo em junho de 2009; 
• S 2 : saldo em janeiro de 2010; 
• S 3 : saldo em junho de 2010. 
A ordenação dos saldos S 1 , S 2 e S 3 , do maior para o menor, é`,
 images: ['/enem/2024/images/enem_2024_d2_q152.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`S 1 , S 3 e S 2 .`},
 { id: 'B', type: 'text', value:`S 2 , S 1 e S 3 .`},
 { id: 'C', type: 'text', value:`S 2 , S 3 e S 1 .`},
 { id: 'D', type: 'text', value:`S 3 , S 1 e S 2 .`},
 { id: 'E', type: 'text', value:`S 3 , S 2 e S 1 .`},
 ],
 correct: 'A',
 explanation: `Saldo = exportações − importações (em cada mês). Pelo gráfico: em jun/2009 as exportações estão bem acima das importações (saldo S₁ ≈ +4,5, o maior); em jun/2010 exportações 17,1 e importações 14,8 → S₃ ≈ +2,3; em jan/2010 as duas curvas estão próximas → S₂ ≈ +0,7 (o menor). Ordem decrescente: S₁, S₃, S₂. Resposta: A.`,
 subject: ['mat'],
 topics: ['Estatística', 'Questões aleatórias'],
 },
 {
 id: 153,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um instituto de pesquisa constatou que, nos últimos 
dez anos, o crescimento populacional de uma cidade foi 
de 135,25%. 
Qual é a representação decimal da taxa percentual desse 
crescimento populacional?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`13 525,0`},
 { id: 'B', type: 'text', value:`135,25`},
 { id: 'C', type: 'text', value:`13,525`},
 { id: 'D', type: 'text', value:`1,3525`},
 { id: 'E', type: 'text', value:`0,13525`},
 ],
 correct: 'D',
 explanation: `A taxa percentual é 135,25%. A representação decimal é obtida dividindo por 100: 135,25 ÷ 100 = 1,3525. Resposta: D.`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 154,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Contratos de vários serviços disponíveis na internet
apresentam uma quantidade excessiva de informações.
Isso faz com que o tempo necessário para a leitura desses
contratos possa ser longo.
O quadro apresenta uma amostra do tempo considerado
necessário para a leitura completa do contrato de alguns
serviços digitais.
Tipo de serviço — Tempo necessário para a leitura completa do contrato (em minuto)
A — 36
B — 17
C — 27
D — 13
E — 13
F — 13
ROMERO, L. Não li e concordo. Superinteressante,
n. 307, ago. 2012 (adaptado).
O tempo médio, em minuto, necessário para a leitura
completa de um contrato de serviço dentre os listados
no quadro é, com uma casa decimal, aproximadamente,`,
    images: ['/enem/2024/images/enem_2024_d2_q154.jpg'],
 alternatives: [
      { id: 'A', type: 'text', value:`13,0.`},
      { id: 'B', type: 'text', value:`15,0.`},
      { id: 'C', type: 'text', value:`19,8.`},
      { id: 'D', type: 'text', value:`20,0.`},
      { id: 'E', type: 'text', value:`23,3.`},

 ],
 correct: 'C',
 explanation: `Média dos seis tempos (36, 17, 27, 13, 13, 13): soma = 36+17+27+13+13+13 = 119. Média = 119/6 ≈ 19,83 → 19,8. Resposta: C.`,
 subject: ['mat'],
 topics: ['Estatística', 'Questões aleatórias'],
 },
 {
 id: 155,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um proprietário pretende instalar um sensor de 
presença para a proteção de seu imóvel. O sensor 
deverá detectar movimentos de objetos e pessoas numa 
determinada região plana. A figura ilustra a vista superior 
da área de cobertura (setor circular em azul) de um sensor 
colocado no ponto S . Essa área depende da medida do 
ângulo α , em grau, e do raio R , em metro. 
Ao aumentar o ângulo α ou o raio R aumenta-se a 
área de cobertura do sensor. Entretanto, quanto maior 
essa área, maior o preço do sensor. 
Para esse fim, há cinco tipos de sensores disponíveis 
no mercado, cada um com as seguintes características: 
• tipo I: α = 15 ° e R = 20 m; 
• tipo II: α = 30 ° e R = 22 m; 
• tipo III: α = 40 ° e R = 12 m; 
• tipo IV: α = 60 ° e R = 16 m; 
• tipo V: α = 90 ° e R = 10 m. 
Esse proprietário pretende adquirir um desses sensores 
que seja capaz de cobrir, no mínimo, uma área de medida 
70 m² , com o menor preço possível. 
Use 3 como valor aproximado para π . 
O proprietário do imóvel deverá adquirir o sensor do tipo`,
 images: ['/enem/2024/images/enem_2024_d2_q155.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'E',
 explanation: `Área do setor = (α/360)·π·R², com π = 3. Tipo I: (15/360)·3·20² = (15/360)·1 200 = 50 m². Tipo II: (30/360)·3·22² = (1/12)·1 452 = 121 m². Tipo III: (40/360)·3·12² = (1/9)·432 = 48 m². Tipo IV: (60/360)·3·16² = (1/6)·768 = 128 m². Tipo V: (90/360)·3·10² = (1/4)·300 = 75 m². As que cobrem pelo menos 70 m² são II, IV e V; a de menor área (menor preço) é a V (75 m²). Resposta: E.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 156,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O uso de aplicativos de transporte tem sido uma 
alternativa à população que busca preços mais competitivos 
para se locomover, principalmente nas grandes cidades. 
As formas usadas para determinar o valor cobrado por 
cada viagem variam de um aplicativo para outro, mas, em 
geral, o valor V a ser pago, em real, varia em função de: 
• tarifa base F : valor fixo, em real, cobrado no início 
da viagem; 
• tempo T : tempo, em minuto, de duração da viagem; 
• distância D : distância percorrida, em quilômetro. 
Um desses aplicativos cobra R$ 2,00 de valor fixo, 
acrescido de R$ 0,26 por minuto de viagem e de R$ 1,40 
por quilômetro rodado. 
Nessas condições, a expressão que fornece o valor V a 
ser pago por uma viagem desse aplicativo é`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`2,00 F + 0,26 T + 1,40 D`},
 { id: 'B', type: 'text', value:`2,00 + 0,26 T + 1,40 D`},
 { id: 'C', type: 'text', value:`2,00 + 0,26 T + D`},
 { id: 'D', type: 'text', value:`0,26T + 1,40D`},
 { id: 'E', type: 'text', value:`F + T + D`},
 ],
 correct: 'B',
 explanation: `O valor é a soma do fixo com o custo por tempo e por distância: V = 2,00 (fixo) + 0,26·T (por minuto) + 1,40·D (por km). Logo V = 2,00 + 0,26T + 1,40D. Resposta: B.`,
 subject: ['mat'],
 topics: ['Funções do 1º grau', 'Questões aleatórias'],
 },
 {
 id: 157,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma doceira vende e entrega, em seu bairro, porções 
de 100 g de docinhos de aniversário. Atualmente, a taxa 
única de entrega é R$ 10,00, e o valor cobrado por uma 
porção é R$ 25,00. Por uma estratégia de vendas, a partir 
da próxima semana, a taxa única de entrega será R$ 15,00, 
e um novo valor será cobrado por uma porção, de maneira 
que o valor total a ser pago por um cliente na compra de 
5 porções permaneça o mesmo. 
A partir da próxima semana, qual será o novo valor 
cobrado, em real, por uma porção?`,
 alternatives: [
 { id: 'A', type: 'text', value:`12,50`},
 { id: 'B', type: 'text', value:`20,00`},
 { id: 'C', type: 'text', value:`24,00`},
 { id: 'D', type: 'text', value:`30,00`},
 { id: 'E', type: 'text', value:`37,50`},
 ],
 correct: 'C',
 explanation: `Valor atual de 5 porções: 5·25 + 10 (entrega) = 125 + 10 = 135. Com a nova entrega de 15 e novo preço p por porção, mantendo o total: 5p + 15 = 135 → 5p = 120 → p = 24,00. Resposta: C.`,
 subject: ['mat'],
 topics: ['Equações, inequações e sistemas', 'Questões aleatórias'],
 },
 {
 id: 158,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma loja de defensivos agrícolas, os preços de 
alguns produtos foram divulgados em um cartaz. 
Sabe-se que 1 litro de defensivo do Tipo A é suficiente 
para aplicação em 0,5 hectare (ha), enquanto que 1 litro de 
defensivo do Tipo B é suficiente para aplicação em 0,4 ha. 
Um agricultor precisa comprar, nessa loja, uma quantidade 
de litros de defensivo suficiente para aplicar em uma área 
de 20 ha, além de levar uma máscara para aplicação. 
O valor mínimo, em real, a ser gasto pelo agricultor é`,
 images: ['/enem/2024/images/enem_2024_d2_q158.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`147,00.`},
 { id: 'B', type: 'text', value:`150,00.`},
 { id: 'C', type: 'text', value:`162,50.`},
 { id: 'D', type: 'text', value:`165,75.`},
 { id: 'E', type: 'text', value:`168,00.`},
 ],
 correct: 'C',
 explanation: `Para 20 ha: Tipo A rende 0,5 ha/L → 20/0,5 = 40 L; Tipo B rende 0,4 ha/L → 20/0,4 = 50 L. Com a promoção, comprar ≥ 35 L do Tipo A dá a máscara grátis: custo A = 40·4,20 = 168,00. Tipo B: 50·3,00 = 150,00 + máscara 12,50 = 162,50. O menor valor é R$ 162,50 (Tipo B). Resposta: C.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 159,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma tubulação despeja sempre o mesmo volume de 
água por unidade de tempo em uma caixa-d’água, o que 
significa dizer que a vazão de água nessa tubulação é 
constante. Na junção dessa tubulação com a caixa-d’água, 
está instalada uma membrana de filtragem cujo objetivo é 
filtrar eventuais impurezas presentes na água, combinado 
a um bom fluxo de água. O fluxo ( φ ) de água através 
da superfície da membrana é diretamente proporcional 
à vazão de água na tubulação, medida em mililitro por 
segundo, e inversamente proporcional à área da superfície 
da membrana, medida em centímetro quadrado. 
A unidade de medida adequada para descrever o fluxo 
( φ ) de água que atravessa a superfície da membrana é`,
 alternatives: [
 { id: 'A', type: 'text', value: `mL · s · cm²` },
 { id: 'B', type: 'text', value: `(mL/s) · cm²` },
 { id: 'C', type: 'text', value: `mL/(cm² · s)` },
 { id: 'D', type: 'text', value: `(cm² · s)/mL` },
 { id: 'E', type: 'text', value: `cm²/(mL · s)` },
 ],
 correct: 'C',
 explanation: `O fluxo φ é diretamente proporcional à vazão (mL/s) e inversamente proporcional à área (cm²): φ = vazão/área = (mL/s)/cm² = mL/(cm²·s). Resposta: C.`,
 subject: ['mat'],
 topics: ['Grandezas e unidades de medida', 'Questões aleatórias'],
 },
 {
 id: 160,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma piscina tem capacidade de 2 500 000 litros. 
Seu sistema de abastecimento foi regulado para ter 
uma vazão constante de 6 000 litros de água por minuto. 
O mesmo sistema foi instalado em uma segunda 
piscina, com capacidade de 2 750 000 litros, e regulado 
para ter uma vazão, também constante, capaz de enchê-la 
em um tempo 20% maior que o gasto para encher 
a primeira piscina. 
A vazão do sistema de abastecimento da segunda piscina, 
em litro por minuto, é`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`8 250.`},
 { id: 'B', type: 'text', value:`7 920.`},
 { id: 'C', type: 'text', value:`6 545.`},
 { id: 'D', type: 'text', value:`5 500.`},
 { id: 'E', type: 'text', value:`5 280.`},
 ],
 correct: 'D',
 explanation: `Tempo para encher a 1ª piscina: 2 500 000 ÷ 6 000 = 416,67 min. A 2ª é enchida em tempo 20% maior: 416,67·1,20 = 500 min. Vazão da 2ª = 2 750 000 ÷ 500 = 5 500 L/min. Resposta: D.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 161,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um tanque, em formato de paralelepípedo reto retângulo, tem em seu interior dois anteparos verticais, fixados na 
sua base e em duas paredes opostas, sendo perpendiculares a elas, conforme a figura. 
Esses anteparos, de espessuras desprezíveis, estão instalados de maneira a dividir a base do tanque em três 
retângulos congruentes, tendo suas alturas iguais à metade e a um quarto da altura do tanque. O tanque é abastecido 
por uma entrada situada no teto, através de um duto que despeja água a uma vazão constante, sendo necessárias 
12 horas para finalizar o seu enchimento. 
O gráfico que descreve, em cada instante, a maior altura de coluna de água, dentre aquelas que vão sendo formadas 
ao longo do enchimento do tanque, é`,
 images: ['/enem/2024/images/enem_2024_d2_q161.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q161_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q161_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q161_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q161_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q161_E.jpg` },
 ],
 correct: 'B',
 explanation: `A água entra no compartimento cujo anteparo de saída tem altura H/2. Com vazão constante e enchimento total em 12 h, cada etapa é proporcional ao volume. 1) Enche esse compartimento (área A) até H/2: volume A·(H/2), leva 2 h → maior altura sobe de 0 a H/2. 2) A água transborda e enche os outros dois compartimentos (área 2A) até H/2: volume 2A·(H/2) = A·H, leva 4 h → a maior altura permanece H/2 (patamar de 2 h a 6 h). 3) Com todos no nível H/2 (área 3A), sobem juntos até H: volume 3A·(H/2), leva 6 h → a maior altura cresce de H/2 a H (de 6 h a 12 h). O gráfico é: subida, patamar de 2 a 6 h, nova subida até 12 h. Resposta: B.`,
 subject: ['mat'],
 topics: ['Leitura e interpretação de gráficos de funções', 'Questões aleatórias'],
 },
 {
 id: 162,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma imobiliária iniciou uma campanha de divulgação 
para promover a venda de apartamentos que podem ser 
pagos em 100 parcelas mensais. O valor da primeira delas 
é fixado no momento da compra, com o pagamento dessa 
primeira parcela. A partir da segunda parcela, o valor é 
determinado pela aplicação de um acréscimo percentual 
fixo ao valor da parcela anterior. Como atrativo, a imobiliária 
fará o pagamento de todas as parcelas correspondentes 
ao mês de aniversário do comprador. 
Um cliente, que faz aniversário no mês de maio, 
decidiu comprar um desses apartamentos por meio do 
financiamento oferecido pela imobiliária, e pretende escolher 
o mês mais adequado para realizar essa compra, de modo 
que o valor total dos pagamentos seja o menor possível. 
Qual é o mês que esse cliente deverá escolher para 
realizar a compra do apartamento?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Fevereiro.`},
 { id: 'B', type: 'text', value:`Abril.`},
 { id: 'C', type: 'text', value:`Maio.`},
 { id: 'D', type: 'text', value:`Junho.`},
 { id: 'E', type: 'text', value:`Agosto.`},
 ],
 correct: 'A',
 explanation: `As parcelas formam uma PG crescente (acréscimo percentual fixo), então as últimas são as maiores. A imobiliária paga as parcelas que caem no mês de aniversário (maio); para pagar o menor total, o comprador quer que a maior parcela, a 100ª, caia em maio. A 100ª parcela ocorre 99 meses após a compra; como 99 = 8·12 + 3, ela cai 3 meses após o mês da compra. Para que esse mês seja maio (mês 5), a compra deve ser em maio − 3 = fevereiro. Resposta: A.`,
 subject: ['mat'],
 topics: ['Sequências e progressões', 'Matemática financeira', 'Questões aleatórias'],
 },
 {
 id: 163,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um sistema de polias circulares e correias é um dos 
mecanismos responsáveis pela transmissão de movimento 
em máquinas rotativas. O manual de um motor traz uma 
figura representando um sistema composto por duas polias 
e uma correia de transmissão, tensionada e perfeitamente 
ajustada sobre as polias, de modo a não apresentar folgas 
nos contatos com as polias. Considere que as partes 
dessa correia que não ficam em contato com as polias são 
representadas por segmentos de reta tangentes às polias. 
Para substituição dessa correia, é necessária a 
especificação de seu comprimento. 
Considere 3 como valor aproximado para π . 
A medida do comprimento dessa correia, em centímetro, é`,
 images: ['/enem/2024/images/enem_2024_d2_q163.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`54.`},
 { id: 'B', type: 'text', value:`60.`},
 { id: 'C', type: 'text', value:`66.`},
 { id: 'D', type: 'text', value:`68.`},
 { id: 'E', type: 'text', value:`72.`},
 ],
 correct: 'D',
 explanation: `Comprimento = 2 trechos retos + arco na polia menor + arco na polia maior. Como o ângulo de contato na polia menor é 150°, na maior é 360° − 150° = 210°. Arco menor (r=4, π=3): (150/360)·2·3·4 = (5/12)·24 = 10. Arco maior (R=8): (210/360)·2·3·8 = (7/12)·48 = 28. Retos: 2·15 = 30. Total = 30 + 10 + 28 = 68 cm. Resposta: D.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 164,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A prefeitura de uma cidade planeja construir três postos 
de saúde. Esses postos devem ser construídos em locais 
equidistantes entre si e de forma que as distâncias desses 
três postos ao hospital dessa cidade sejam iguais. Foram 
conseguidos três locais para a construção dos postos de 
saúde que apresentam as características desejadas, e 
que distam 10 km entre si, conforme o esquema, no qual o 
ponto H representa o local onde está construído o hospital; 
os pontos P 1 , P 2 e P 3 , os postos de saúde; e esses quatro 
pontos estão em um mesmo plano. 
A distância, em quilômetro, entre o hospital e cada um dos 
postos de saúde, é um valor entre`,
 images: ['/enem/2024/images/enem_2024_d2_q164.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`2 e 3.`},
 { id: 'B', type: 'text', value:`4 e 5.`},
 { id: 'C', type: 'text', value:`5 e 6.`},
 { id: 'D', type: 'text', value:`7 e 8.`},
 { id: 'E', type: 'text', value:`8 e 9.`},
 ],
 correct: 'C',
 explanation: `Os três postos formam um triângulo equilátero de lado 10 km, e o hospital é equidistante dos três (centro/circuncentro). O raio da circunferência circunscrita de um triângulo equilátero de lado ℓ é R = ℓ/√3 = 10/√3 ≈ 10/1,73 ≈ 5,77 km, valor entre 5 e 6. Resposta: C.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 165,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para melhorar o fluxo de ônibus em uma avenida que 
tem dois semáforos, a prefeitura reduzirá o tempo em 
que cada sinal ficará vermelho, que atualmente é de 15 
segundos a cada 60 segundos. Admita que o instante de 
chegada de um ônibus a cada semáforo é aleatório. 
O engenheiro de tráfego da prefeitura calculou a 
probabilidade de um ônibus encontrar cada um deles 
vermelho, obtendo 15 
60 
. A partir daí, estabeleceu uma 
mesma redução na quantidade do tempo, em segundo, 
em que cada sinal ficará vermelho, de maneira que 
a probabilidade de um ônibus encontrar ambos os 
sinais vermelhos numa mesma viagem seja igual a 
4 
100 , 
considerando os eventos independentes. 
Para isso, a redução do tempo em que o sinal ficará 
vermelho, em segundo, estabelecida pelo engenheiro foi de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1,35.`},
 { id: 'B', type: 'text', value:`3,00.`},
 { id: 'C', type: 'text', value:`9,00.`},
 { id: 'D', type: 'text', value:`12,60.`},
 { id: 'E', type: 'text', value:`13,80.`},
 ],
 correct: 'B',
 explanation: `Atualmente P(vermelho) = 15/60 = 0,25. Reduzindo x segundos de cada vermelho, a probabilidade em cada sinal passa a (15−x)/60. Como os eventos são independentes, encontrar ambos vermelhos: [(15−x)/60]² = 4/100 → (15−x)/60 = 2/10 = 0,2 → 15 − x = 12 → x = 3,00 s. Resposta: B.`,
 subject: ['mat'],
 topics: ['Probabilidade', 'Questões aleatórias'],
 },
 {
 id: 166,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A densidade demográfica de uma região é definida 
como sendo a razão entre o número de habitantes dessa 
região e sua área, expressa na unidade habitantes por 
quilômetro quadrado. 
Uma região R é subdividida em várias outras, sendo 
uma delas a região Q . A área de Q é igual a três quartos da 
área de R, e o número de habitantes de Q é igual à metade 
do número de habitantes de R. As densidades demográficas 
correspondentes a essas regiões são denotadas por d ( Q ) 
e d ( R ). 
A expressão que relaciona d ( Q ) e d ( R ) é`,
 alternatives: [
 { id: 'A', type: 'text', value: `d(Q) = (1/4)·d(R)` },
 { id: 'B', type: 'text', value: `d(Q) = (1/2)·d(R)` },
 { id: 'C', type: 'text', value: `d(Q) = (3/4)·d(R)` },
 { id: 'D', type: 'text', value: `d(Q) = (3/2)·d(R)` },
 { id: 'E', type: 'text', value: `d(Q) = (2/3)·d(R)` },
 ],
 correct: 'E',
 explanation: `d = habitantes/área. Para Q: área A(Q) = (3/4)A(R) e habitantes hab(Q) = (1/2)hab(R). Então d(Q) = hab(Q)/A(Q) = [(1/2)hab(R)] / [(3/4)A(R)] = (1/2)·(4/3)·[hab(R)/A(R)] = (2/3)·d(R). Resposta: E.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 167,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Atualmente, há telefones celulares com telas de 
diversos tamanhos e em formatos retangulares. Alguns 
deles apresentam telas medindo 3½ polegadas, com
determinadas especificações técnicas. Além disso, em
muitos modelos, com a inclusão de novas funções no
celular, suas telas ficaram maiores, sendo muito comum
encontrarmos atualmente telas medindo 4⅚ polegadas,
conforme a figura.
Disponível em: www.tecmundo.com.br. 
Acesso em: 5 nov. 2014 (adaptado). 
A diferença de tamanho, em valor absoluto, entre as 
medidas, em polegada, das telas do celular 2 e do celular 1, 
representada apenas com uma casa decimal, é`,
 images: ['/enem/2024/images/enem_2024_d2_q167.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`0,1.`},
 { id: 'B', type: 'text', value:`0,5.`},
 { id: 'C', type: 'text', value:`1,0.`},
 { id: 'D', type: 'text', value:`1,3.`},
 { id: 'E', type: 'text', value:`1,8.`},
 ],
 correct: 'D',
 explanation: `Tela do celular 1: 3½ = 7/2 polegadas. Tela do celular 2: 4 5/6 = 29/6 polegadas. Diferença = 29/6 − 7/2 = 29/6 − 21/6 = 8/6 = 1,333… ≈ 1,3 polegada. Resposta: D.`,
 subject: ['mat'],
 topics: ['Matemática básica', 'Questões aleatórias'],
 },
 {
 id: 168,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Projetistas de uma fábrica de amortecedores realizaram uma serie de experimentos que produziram oscilacoes 
semelhantes ao comportamento do gráfico de uma senoide, para qualquer tipo de estrada. Cada experimento teve 
duração de 20 minutos, sendo os 9 primeiros minutos em superfície que simula uma rodovia asfaltada, e os 11 minutos 
restantes em superfície que simula uma estrada de chão. 
Para os amortecedores serem aprovados no experimento, exige-se que as amplitudes das ondas oscilatorias, em 
cada tipo de superfície, sejam constantes e, ainda, que a amplitude da oscilacao do amortecedor no asfalto seja menor 
do que sua amplitude da oscilação na estrada de chão. 
O tipo de gráfico que descreve o comportamento oscilatório de um amortecedor aprovado nesse experimento é`,
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q168_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q168_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q168_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q168_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q168_E.jpg` },
 ],
 correct: 'A',
 explanation: `Para ser aprovado, a amplitude deve ser constante em cada superfície e a amplitude no asfalto (primeiros 9 min) deve ser menor que na estrada de chão (11 min finais). O gráfico adequado mostra oscilação de amplitude pequena e constante de 0 a 9 min e depois amplitude maior e constante de 9 a 20 min. Resposta: A.`,
 subject: ['mat'],
 topics: ['Leitura e interpretação de gráficos de funções', 'Questões aleatórias'],
 },
 {
 id: 169,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A criptografia refere-se à construção e análise de protocolos que impedem terceiros de lerem mensagens privadas. 
Júlio César, imperador romano, utilizava um código para proteger as mensagens enviadas a seus generais. Assim, 
se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida. Nesse código, cada letra do 
alfabeto era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C”
pelo “F”, e assim sucessivamente.
Disponível em: www.codifica.ibict.br. Acesso em: 15 out. 2019.
Qualquer código que tenha um padrão de substituição de letras como o descrito é considerado uma Cifra de César ou um Código de César. Note que, para decifrar uma Cifra de César, basta descobrir por qual letra o “A” foi substituído, pois isso define todas as demais substituições a serem feitas.
Uma mensagem, em um alfabeto de 26 letras, foi codificada usando uma Cifra de César. Considere a probabilidade de se descobrir, aleatoriamente, o padrão utilizado nessa codificação, e que uma tentativa frustrada deverá ser eliminada nas tentativas seguintes.
A probabilidade de se descobrir o padrão dessa Cifra de César apenas na terceira tentativa é dada por`,
 images: ['/enem/2024/images/enem_2024_d2_q169.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `1/25 + 1/25 + 1/25` },
 { id: 'B', type: 'text', value: `24/25 + 23/24 + 1/23` },
 { id: 'C', type: 'text', value: `1/25 × 1/24 × 1/23` },
 { id: 'D', type: 'text', value: `24/25 × 23/25 × 1/25` },
 { id: 'E', type: 'text', value: `24/25 × 23/24 × 1/23` },
 ],
 correct: 'E',
 explanation: `Uma Cifra de César fica definida pela letra que substitui o 'A'; como são 26 letras e a substituição por si mesma não cifra, há 25 padrões possíveis. Descobrir só na 3ª tentativa (tentativas erradas eliminadas): P = (24/25)·(23/24)·(1/23). Resposta: E.`,
 subject: ['mat'],
 topics: ['Probabilidade', 'Questões aleatórias'],
 },
 {
 id: 170,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma região com grande incidência de terremotos, observou-se que dois terremotos ocorridos apresentaram 
magnitudes M 1 e M 2 , medidos segundo a escala Richter, e liberaram energias iguais a E 1 e E 2 , respectivamente. Entre 
os estudiosos do assunto, é conhecida uma expressão algébrica relacionando esses valores dada por 
M₂ − M₁ = (2/3)·log(E₂/E₁)
Estudos mais abrangentes observaram que o primeiro terremoto apresentou a magnitude M₁ = 6,9 e a energia 
liberada foi um décimo da observada no segundo terremoto. 
O valor aproximado da magnitude M₂ do segundo terremoto, expresso com uma casa decimal, é igual a`,
 alternatives: [
 { id: 'A', type: 'text', value: `5,4.` },
 { id: 'B', type: 'text', value: `6,2.` },
 { id: 'C', type: 'text', value: `7,6.` },
 { id: 'D', type: 'text', value: `8,2.` },
 { id: 'E', type: 'text', value: `8,4.` },
 ],
 correct: 'C',
 explanation: `M₂ − M₁ = (2/3)·log(E₂/E₁). A energia do 1º é 1/10 da do 2º, logo E₂/E₁ = 10. Então M₂ − 6,9 = (2/3)·log(10) = (2/3)·1 = 0,667. M₂ = 6,9 + 0,667 ≈ 7,6. Resposta: C.`,
 subject: ['mat'],
 topics: ['Função exponencial e logaritmo', 'Questões aleatórias'],
 },
 {
 id: 171,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um jardineiro dispõe de k metros lineares de cerca baixa para fazer um jardim ornamental. O jardim, delimitado 
por essa cerca, deve ter a forma de um triângulo equilatero, um quadrado ou um hexágono regular. A escolha sera 
pela forma que resulte na maior área. 
O jardineiro escolherá a forma de`,
 alternatives: [
      { id: 'A', type: 'text', value: `hexágono regular, pois a área do jardim, em metro quadrado, será k²√3/24.` },
      { id: 'B', type: 'text', value: `hexágono regular, pois a área do jardim, em metro quadrado, será 3k²√3/2.` },
      { id: 'C', type: 'text', value: `quadrado, pois a área do jardim, em metro quadrado, será k²/16.` },
      { id: 'D', type: 'text', value: `triângulo equilátero, pois a área do jardim, em metro quadrado, será k²√3/36.` },
      { id: 'E', type: 'text', value: `triângulo equilátero, pois a área do jardim, em metro quadrado, será k²√3/4.` },

 ],
 correct: 'A',
 explanation: `Com perímetro fixo k, entre polígonos regulares a área cresce com o número de lados; logo o hexágono dá a maior área. Lado do hexágono: k/6. Área do hexágono regular = (3√3/2)·lado² = (3√3/2)·(k/6)² = (3√3/2)·(k²/36) = k²√3/24. Resposta: A.`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 172,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um aeroporto disponibiliza o serviço de transporte gratuito entre seus dois terminais utilizando os ônibus A e B, que
partem simultaneamente, de hora em hora, de terminais diferentes. A distância entre os terminais é de 9 000 metros,
e o percurso total dos ônibus, de um terminal ao outro, é monitorado por um sistema de cinco câmeras que cobrem
diferentes partes do trecho, conforme o esquema.
O alcance de cada uma das cinco câmeras é:
• câmera I: 1/5 do percurso;
• câmera II: 3/10 do percurso;
• câmera III: 1/10 do percurso;
• câmera IV: 1/10 do percurso;
• câmera V: 3/10 do percurso.
Em determinado horário, o ônibus A parte do terminal 1 e realiza o percurso total com velocidade constante de
250 m/min; enquanto o ônibus B, que parte do terminal 2, realiza o percurso total com velocidade constante de 150 m/min.
Qual câmera registra o momento em que os ônibus A e B se encontram?`,
 images: ['/enem/2024/images/enem_2024_d2_q172.jpg'],
 alternatives: [
      { id: 'A', type: 'text', value:`I`},
      { id: 'B', type: 'text', value:`II`},
      { id: 'C', type: 'text', value:`III`},
      { id: 'D', type: 'text', value:`IV`},
      { id: 'E', type: 'text', value:`V`},

 ],
 correct: 'D',
 explanation: `Percurso = 9 000 m; os ônibus partem em sentidos opostos. Velocidade de aproximação = 250 + 150 = 400 m/min, então se encontram em 9 000/400 = 22,5 min. O ônibus A percorre 250·22,5 = 5 625 m a partir do terminal 1. As câmeras cobrem (do terminal 1): I 0–1 800, II 1 800–4 500, III 4 500–5 400, IV 5 400–6 300, V 6 300–9 000. 5 625 m está na faixa da câmera IV. Resposta: D.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 173,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa tem 400 funcionários, distribuídos em 
três setores: administrativo, logística e produção. O gráfico 
apresenta a distribuição quantitativa desses funcionários, 
por setor e por faixa etária. 
Uma viagem de férias será sorteada entre esses 
funcionários, de forma que todos terão igual probabilidade 
de serem sorteados. 
A maior probabilidade é que o funcionário sorteado esteja 
na faixa etária`,
 images: ['/enem/2024/images/enem_2024_d2_q173.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`entre 25 e 45 anos, pois é a faixa etária com maior 
quantidade de funcionários.`},
 { id: 'B', type: 'text', value:`entre 25 e 45 anos, pois é a única faixa etária cujas 
porcentagens são maiores do que as porcentagens 
mínimas de cada setor.`},
 { id: 'C', type: 'text', value:`até 25 anos, pois é a única faixa etária cujos percentuais 
associados aos setores aumentam com o aumento da 
quantidade de funcionários por setor.`},
 { id: 'D', type: 'text', value:`até 25 anos, pois é a faixa etária que apresenta maior 
quantidade de funcionários no setor de produção, 
que é o setor que emprega metade dos funcionários 
dessa empresa.`},
 { id: 'E', type: 'text', value:`a partir de 45 anos, pois a soma das porcentagens
associadas a essa faixa etária é 110%, que é maior do
que as respectivas somas associadas às outras faixas
etárias, que são 105% e 85%.`},
 ],
 correct: 'A',
 explanation: `Quantidades por setor: Administrativo 80, Logística 120, Produção 200. Faixa 'até 25': 0,20·80 + 0,25·120 + 0,40·200 = 16 + 30 + 80 = 126. Faixa '25 a 45': 0,30·80 + 0,40·120 + 0,35·200 = 24 + 48 + 70 = 142. Faixa 'a partir de 45': 0,50·80 + 0,35·120 + 0,25·200 = 40 + 42 + 50 = 132. A maior quantidade é a da faixa entre 25 e 45 anos (142), logo é a de maior probabilidade. Resposta: A.`,
 subject: ['mat'],
 topics: ['Probabilidade', 'Questões aleatórias'],
 },
 {
 id: 174,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em um jogo virtual para celular, um personagem pode 
percorrer trajetórias retilíneas voando ou se deslocando ao 
longo de paredes. Considere que o personagem descreve 
a trajetória ABCDEF , em que os pontos`,
 images: ['/enem/2024/images/enem_2024_d2_q174.jpg'],
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q174_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q174_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q174_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q174_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q174_E.jpg` },
 ],
 correct: 'C',
 explanation: `Na projeção ortogonal sobre a base, cada ponto perde a altura. Como A, D e E estão numa mesma parede vertical, projetam-se todos sobre a mesma reta (a base dessa parede); B e C, na parede paralela, projetam-se sobre a outra reta paralela; F já está na base. Ligando A'→B'→C'→D'→E'→F' obtém-se o ziguezague entre as duas retas paralelas mais o segmento até F, que corresponde à alternativa C. Resposta: C.`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 175,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma indústria faz uma parceria com uma distribuidora 
de sucos para lançar no mercado dois tipos de 
embalagens. Para a fabricação dessas embalagens, 
a indústria dispõe de folhas de alumínio retangulares, 
de dimensões 10 cm por 20 cm. Cada uma dessas 
folhas é utilizada para formar a superfície lateral da 
embalagem, em formato de cilindro circular reto, que 
posteriormente recebe fundo e tampa circulares. A figura 
ilustra, dependendo de qual das duas extensões será 
utilizada como altura, as duas opções para formar a 
possível embalagem. 
Dentre essas duas embalagens, a de maior capacidade 
apresentará volume, em centímetro cúbico, igual a`,
    images: ['/enem/2024/images/enem_2024_d2_q175.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`4000π`},
 { id: 'B', type: 'text', value:`2000π`},
 { id: 'C', type: 'text', value:`4000/π`},
 { id: 'D', type: 'text', value:`1000/π`},
 { id: 'E', type: 'text', value:`500/π`},
 ],
 correct: 'D',
 explanation: `A folha 10×20 forma a lateral do cilindro. Embalagem 1 (altura 20): a circunferência vale 10 → 2πr = 10 → r = 5/π; V = πr²h = π·(5/π)²·20 = π·(25/π²)·20 = 500/π. Embalagem 2 (altura 10): circunferência 20 → r = 10/π; V = π·(10/π)²·10 = π·(100/π²)·10 = 1 000/π. A maior capacidade é 1 000/π cm³. Resposta: D.`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 176,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As receitas anuais obtidas por uma indústria no período 
de 2014 a 2021, em milhão de reais, foram registradas, por 
pontos, em um gráfico. Nele, também está representada a 
reta que descreve a tendência de evolução das receitas. 
Essa reta pode ser utilizada para estimar as receitas dos 
anos seguintes. 
A estimativa da receita, em milhão de reais, dessa 
indústria, para o ano de 2026, obtida a partir dessa reta 
de tendência, é`,
 images: ['/enem/2024/images/enem_2024_d2_q176.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`7.`},
 { id: 'B', type: 'text', value:`8.`},
 { id: 'C', type: 'text', value:`9.`},
 { id: 'D', type: 'text', value:`10.`},
 { id: 'E', type: 'text', value:`11.`},
 ],
 correct: 'B',
 explanation: `Pela reta de tendência (regressão) dos pontos de 2014 a 2021, a inclinação é de aproximadamente 0,34 milhão por ano e a receita média (~5,2) ocorre no ano central (~2017,5). Projetando para 2026: 5,2 + 0,34·(2026 − 2017,5) ≈ 5,2 + 0,34·8,5 ≈ 5,2 + 2,9 ≈ 8. A estimativa é 8 milhões de reais. Resposta: B.`,
 subject: ['mat'],
 topics: ['Estatística', 'Questões aleatórias'],
 },
 {
 id: 177,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa produz mochilas escolares sob 
encomenda. Essa empresa tem um custo total de produção, 
composto por um custo fixo, que não depende do número 
de mochilas, mais um custo variável, que é proporcional 
ao número de mochilas produzidas. O custo total cresce 
de forma linear, e a tabela apresenta esse custo para três 
quantidades de mochilas produzidas. 
 
O custo total, em real, para a produção de 80 mochilas será`,
    images: ['/enem/2024/images/enem_2024_d2_q177.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`2 400,00.`},
 { id: 'B', type: 'text', value:`2 520,00.`},
 { id: 'C', type: 'text', value:`2 550,00.`},
 { id: 'D', type: 'text', value:`2 700,00.`},
 { id: 'E', type: 'text', value:`2 800,00.`},
 ],
 correct: 'C',
 explanation: `Custo linear: C = fixo + variável·n. De n=30 (1 050) para n=50 (1 650): variável = (1 650 − 1 050)/(50 − 30) = 600/20 = 30 por mochila. Fixo = 1 050 − 30·30 = 1 050 − 900 = 150. Para n = 80: C = 150 + 30·80 = 150 + 2 400 = 2 550,00. Resposta: C.`,
 subject: ['mat'],
 topics: ['Funções do 1º grau', 'Questões aleatórias'],
 },
 {
 id: 178,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A umidade relativa do ar é um dos indicadores utilizados 
na meteorologia para fazer previsões sobre o clima. 
O quadro apresenta as médias mensais, em porcentagem, 
da umidade relativa do ar em um período de seis meses 
consecutivos em uma cidade. 
 (%) 
Nessa cidade, a mediana desses dados, em porcentagem, 
da umidade relativa do ar no período considerado foi`,
    images: ['/enem/2024/images/enem_2024_d2_q178.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`56.`},
 { id: 'B', type: 'text', value:`58.`},
 { id: 'C', type: 'text', value:`59.`},
 { id: 'D', type: 'text', value:`60.`},
 { id: 'E', type: 'text', value:`62.`},
 ],
 correct: 'E',
 explanation: `Dados (6 valores): 66, 64, 54, 46, 60, 64. Ordenando: 46, 54, 60, 64, 64, 66. Com 6 valores, a mediana é a média dos 2 centrais (3º e 4º): (60 + 64)/2 = 62. Resposta: E.`,
 subject: ['mat'],
 topics: ['Estatística', 'Questões aleatórias'],
 },
 {
 id: 179,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa de engenharia foi contratada para 
realizar um serviço no valor de R$ 71 250,00. Os sócios da 
empresa decidiram que 40% desse valor seria destinado ao 
pagamento de três engenheiros que gerenciaram o serviço. 
O pagamento para cada um deles será feito de forma 
diretamente proporcional ao total de horas trabalhadas. 
O número de dias e o número de horas diárias 
trabalhadas pelos engenheiros foram, respectivamente: 
• engenheiro I: 4 dias, numa jornada de 5 horas e 
meia por dia; 
• engenheiro II: 5 dias, numa jornada de 4 horas por dia; 
• engenheiro III: 6 dias, numa jornada de 2 horas e 
meia por dia. 
Qual a maior diferença, em real, entre os valores recebidos 
por esse serviço entre dois desses engenheiros?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1 000`},
 { id: 'B', type: 'text', value:`1 500`},
 { id: 'C', type: 'text', value:`3 500`},
 { id: 'D', type: 'text', value:`3 800`},
 { id: 'E', type: 'text', value:`5 250`},
 ],
 correct: 'C',
 explanation: `Valor para os engenheiros: 40% de 71 250 = 28 500. Horas: Eng I = 4·5,5 = 22 h; Eng II = 5·4 = 20 h; Eng III = 6·2,5 = 15 h; total = 57 h. Valor por hora = 28 500/57 = 500. Recebem: I = 22·500 = 11 000; II = 20·500 = 10 000; III = 15·500 = 7 500. Maior diferença = 11 000 − 7 500 = 3 500. Resposta: C.`,
 subject: ['mat'],
 topics: ['Razão, proporção e escala', 'Questões aleatórias'],
 },
 {
 id: 180,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um hospital tem 7 médicos cardiologistas e 6 médicos 
neurologistas em seu quadro de funcionários. Para 
executar determinada atividade, a direção desse hospital 
formará uma equipe com 5 médicos, sendo, pelo menos, 
3 cardiologistas. 
A expressão numérica que representa o número máximo 
de maneiras distintas de formar essa equipe é`,
 alternatives: [
      { id: 'A', type: 'image', value: `/enem/2024/images/enem_2024_d2_q180_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2024/images/enem_2024_d2_q180_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2024/images/enem_2024_d2_q180_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2024/images/enem_2024_d2_q180_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2024/images/enem_2024_d2_q180_E.jpg` },
 ],
 correct: 'E',
 explanation: `Equipe de 5 com pelo menos 3 cardiologistas (7 cardio, 6 neuro). Casos: 3C+2N = C(7,3)·C(6,2); 4C+1N = C(7,4)·C(6,1); 5C+0N = C(7,5)·C(6,0). Em fatoriais: C(7,3)=7!/(3!·4!), C(6,2)=6!/(2!·4!); C(7,4)=7!/(4!·3!), C(6,1)=6!/(1!·5!); C(7,5)=7!/(5!·2!), C(6,0)=6!/(0!·6!). A expressão é a soma dos três produtos. Resposta: E.`,
 subject: ['mat'],
 topics: ['Análise combinatória', 'Questões aleatórias'],
 },
];

export default ENEM_2024_D2;
