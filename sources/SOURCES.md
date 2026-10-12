# SOURCES — ENEM official provas & gabaritos

Single complete source tree for the ENEM exam-correction project. All booklets are the **Azul** caderno (Day 1 = Caderno 1, Day 2 = Caderno 7), regular national application unless noted. Generated 2026-10-12.

## How this was assembled

- **2010** (4 files) was the only year genuinely missing locally; downloaded from the USP physics-department archive (fep.if.usp.br), a reputable academic mirror of the official INEP booklets. INEP's own download host (download.inep.gov.br) returned no working direct URLs and the gov.br provas-e-gabaritos page is JS-rendered, so no official INEP URL could be verified without guessing. Marked as **mirror**.
- **2010 gabaritos** are INEP's "prova com gabarito" format: the full exam booklet with the correct answers marked graphically (green circles), not a one-page answer table. Same page count/text layer as the prova; answers are visual.
- **2009 gabaritos** are combined answer sheets listing all cadernos (Azul, Amarelo, Branco, Rosa / Cinza) — color shown as ALLCAD; they include the Azul column.
- **All other years (2009, 2011–2025)** already existed under `enem v/<year>/` (some gabaritos were misnamed, e.g. 2012/2013 `dia1_azul.pdf` are actually answer keys). These were copied into `sources/`, not re-downloaded; their original INEP download URL was not tracked locally.

| Year | Day | Type | Caderno color | Source URL | Local path | sha256 | Text layer OK? |
|------|-----|------|---------------|------------|------------|--------|----------------|
| 2009 | D1 | GB | ALLCAD | Pre-existing local (enem v/2009/); INEP origin URL not tracked | sources/2009/2009_GB_D1_ALLCAD.pdf | `bf64ea62da3ad841d923aef62751e904dc21351de7b0256f3720125db8375c5f` | yes |
| 2009 | D2 | GB | ALLCAD | Pre-existing local (enem v/2009/); INEP origin URL not tracked | sources/2009/2009_GB_D2_ALLCAD.pdf | `82615d5bb081c011ea83c15a145a7eae7ac0da3a13fd0f1c11e8cb3860286d20` | yes |
| 2009 | D1 | PV | AZUL | Pre-existing local (enem v/2009/); INEP origin URL not tracked | sources/2009/2009_PV_D1_AZUL.pdf | `0fe000974a0b5b30a543860695fc1fc9f8639705069de0e344574c6146ec3921` | yes |
| 2009 | D2 | PV | AZUL | Pre-existing local (enem v/2009/); INEP origin URL not tracked | sources/2009/2009_PV_D2_AZUL.pdf | `1006d00bbd419de56cfdea13adc1a696ed227b05e8a654ac8951244ea13494de` | yes |
| 2010 | D1 | GB | AZUL | https://fep.if.usp.br/~profis/arquivo/avaliacao/enem/provas_gabaritos/2010/PROVA_ENEM_2010_AZUL_1D_GAB.pdf (mirror) | sources/2010/2010_GB_D1_AZUL.pdf | `6902130fa08a9947f86a510148479835bc0887b09082de9f330c24580cc3fc89` | yes |
| 2010 | D2 | GB | AZUL | https://fep.if.usp.br/~profis/arquivo/avaliacao/enem/provas_gabaritos/2010/PROVA_ENEM_2010_AZUL_2D_GAB.pdf (mirror) | sources/2010/2010_GB_D2_AZUL.pdf | `38ca873c375165f7c755c3b678180cc51f350336b8022f77a4014a555906c8d7` | yes |
| 2010 | D1 | PV | AZUL | https://fep.if.usp.br/~profis/arquivo/avaliacao/enem/provas_gabaritos/2010/PROVA_ENEM_2010_AZUL_1D.pdf (mirror) | sources/2010/2010_PV_D1_AZUL.pdf | `74ac8efa628e98b2228c5d00312b8af582544d9a6e79b18f5ac772cef27d3232` | yes |
| 2010 | D2 | PV | AZUL | https://fep.if.usp.br/~profis/arquivo/avaliacao/enem/provas_gabaritos/2010/PROVA_ENEM_2010_AZUL_2D.pdf (mirror) | sources/2010/2010_PV_D2_AZUL.pdf | `c055b889ebffcb858a727e12c71da7cc7c9b805072b4db33f46de4e2df6b041e` | yes |
| 2011 | D1 | GB | AZUL | Pre-existing local (enem v/2011/); INEP origin URL not tracked | sources/2011/2011_GB_D1_AZUL.pdf | `6f48be59b9802da4ba18bffa78e8bff69b8af0cd1c2b985cb8924d180255fffb` | yes |
| 2011 | D2 | GB | AZUL | Pre-existing local (enem v/2011/); INEP origin URL not tracked | sources/2011/2011_GB_D2_AZUL.pdf | `be768a255e257fcc465fed2440db7bd8c7d89d036bfa598466fe7e725f14270d` | yes |
| 2011 | D1 | PV | AZUL | Pre-existing local (enem v/2011/); INEP origin URL not tracked | sources/2011/2011_PV_D1_AZUL.pdf | `0abce128c2a854d6ec649467abe076b81a3b56bb5828f27c024e0cbbfb4d8165` | yes |
| 2011 | D2 | PV | AZUL | Pre-existing local (enem v/2011/); INEP origin URL not tracked | sources/2011/2011_PV_D2_AZUL.pdf | `31cd289a801afbd27c4d3bb02b4343cd54e8cb31fb8742651782213a3068d6c0` | yes |
| 2012 | D1 | GB | AZUL | Pre-existing local (enem v/2012/); INEP origin URL not tracked | sources/2012/2012_GB_D1_AZUL.pdf | `f2df8a34bcfa9f7c7bcd1defe6fce454d310e2bc68effcb0ad522bd7dcfd5a2a` | yes |
| 2012 | D2 | GB | AZUL | Pre-existing local (enem v/2012/); INEP origin URL not tracked | sources/2012/2012_GB_D2_AZUL.pdf | `eb46855a6679b5acefdceaa91b0d4844c496303c7ab9b931c5eea922afebe243` | yes |
| 2012 | D1 | PV | AZUL | Pre-existing local (enem v/2012/); INEP origin URL not tracked | sources/2012/2012_PV_D1_AZUL.pdf | `de9137c900db64f5c254775278e373e76da7338e83bdf7fd4ef9a26cde87f36e` | yes |
| 2012 | D2 | PV | AZUL | Pre-existing local (enem v/2012/); INEP origin URL not tracked | sources/2012/2012_PV_D2_AZUL.pdf | `48a9ccea2859aa1895995fe2b3217f13122c140ad2c3f4b055771eefb0c13970` | yes |
| 2013 | D1 | GB | AZUL | Pre-existing local (enem v/2013/); INEP origin URL not tracked | sources/2013/2013_GB_D1_AZUL.pdf | `d7d90d20008668e523288509b48be44e4f692f30e29c5dfa5b4b16cbaf75dea4` | yes |
| 2013 | D2 | GB | AZUL | Pre-existing local (enem v/2013/); INEP origin URL not tracked | sources/2013/2013_GB_D2_AZUL.pdf | `897c8165f03268a9d68e42a978b52995ff70605daadb1b82e8b47dc2597d1220` | yes |
| 2013 | D1 | PV | AZUL | Pre-existing local (enem v/2013/); INEP origin URL not tracked | sources/2013/2013_PV_D1_AZUL.pdf | `085dde9fa2190c3175be0a18688410db29fbb6b56a0dc22c91580a58f06cf77f` | yes |
| 2013 | D2 | PV | AZUL | Pre-existing local (enem v/2013/); INEP origin URL not tracked | sources/2013/2013_PV_D2_AZUL.pdf | `27e32e246f3cde472f2820131c55bb4acb39067a67247c0566d57b76fdbd53b4` | yes |
| 2014 | D1 | GB | AZUL | Pre-existing local (enem v/2014/); INEP origin URL not tracked | sources/2014/2014_GB_D1_AZUL.pdf | `c4a5f29058a2a287855265c9e61828de47c06db055895fe5ca7a3b3c381b2727` | yes |
| 2014 | D2 | GB | AZUL | Pre-existing local (enem v/2014/); INEP origin URL not tracked | sources/2014/2014_GB_D2_AZUL.pdf | `c4382390c26bd8b5b0e3e8c293843d9454c4aa13bd9cd96ff95575f7870b4eeb` | yes |
| 2014 | D1 | PV | AZUL | Pre-existing local (enem v/2014/); INEP origin URL not tracked | sources/2014/2014_PV_D1_AZUL.pdf | `76f0d0c987980b5f23aed885c94de754d6dc5fcbdbb5f3140906d066919a3127` | yes |
| 2014 | D2 | PV | AZUL | Pre-existing local (enem v/2014/); INEP origin URL not tracked | sources/2014/2014_PV_D2_AZUL.pdf | `874d6e9bfeb044a776ca395974965099d492685aa7b5aab6b20a01192f5ab919` | yes |
| 2015 | D1 | GB | AZUL | Pre-existing local (enem v/2015/); INEP origin URL not tracked | sources/2015/2015_GB_D1_AZUL.pdf | `b490b4267becb240f20e524b31c9c07c1883e1977f832c118544e64f039c5091` | yes |
| 2015 | D2 | GB | AZUL | Pre-existing local (enem v/2015/); INEP origin URL not tracked | sources/2015/2015_GB_D2_AZUL.pdf | `28aebf28e1066bfc4d382a9ccd6c56ed9912631e9057feb1cec46e4194b50bc5` | yes |
| 2015 | D1 | PV | AZUL | Pre-existing local (enem v/2015/); INEP origin URL not tracked | sources/2015/2015_PV_D1_AZUL.pdf | `4acf8c8dd0b24da5871b335b93c6cf3053d0a5f78e6cbaae28ed406bd51f3701` | yes |
| 2015 | D2 | PV | AZUL | Pre-existing local (enem v/2015/); INEP origin URL not tracked | sources/2015/2015_PV_D2_AZUL.pdf | `354ea210a950ae6713015dcee2fefb2e4676c8e506c62c597570fd48d84e2fd9` | yes |
| 2016 | D1 | GB | AZUL | Pre-existing local (enem v/2016/); INEP origin URL not tracked | sources/2016/2016_GB_D1_AZUL.pdf | `67f330f99e7106ba78737a6ea963c5b27d0635530b9e22778a4660064447505f` | yes |
| 2016 | D2 | GB | AZUL | Pre-existing local (enem v/2016/); INEP origin URL not tracked | sources/2016/2016_GB_D2_AZUL.pdf | `67557d0c2c7fd2a6ecb27184f97bca5e2b478aa5d578e3e1338aca2038910052` | yes |
| 2016 | D1 | PV | AZUL | Pre-existing local (enem v/2016/); INEP origin URL not tracked | sources/2016/2016_PV_D1_AZUL.pdf | `d9c2811b2f2c6f933f1d199971456c78ba9c7c6abced6ad14bfb1133b5e335c7` | yes |
| 2016 | D2 | PV | AZUL | Pre-existing local (enem v/2016/); INEP origin URL not tracked | sources/2016/2016_PV_D2_AZUL.pdf | `cd1e1d7d2a65eb6b03b78118b3c749a20a2683f1bb50aa22a51aa608f9860f0d` | yes |
| 2017 | D1 | GB | AZUL | Pre-existing local (enem v/2017/); INEP origin URL not tracked | sources/2017/2017_GB_D1_AZUL.pdf | `51524449c890ec2f1f37196b1ff3e2cbe8d5a5b13df8c75e40439d091e1ae863` | yes |
| 2017 | D2 | GB | AZUL | Pre-existing local (enem v/2017/); INEP origin URL not tracked | sources/2017/2017_GB_D2_AZUL.pdf | `e163b571c66b8b0ced90e758f1c02a2077e4cb60ec614bb9996e12e6450e1db2` | yes |
| 2017 | D1 | PV | AZUL | Pre-existing local (enem v/2017/); INEP origin URL not tracked | sources/2017/2017_PV_D1_AZUL.pdf | `c7e130925e3d9dddd2a6370cbfaacd5edbbc20c2b789f55522721954447038e6` | yes |
| 2017 | D2 | PV | AZUL | Pre-existing local (enem v/2017/); INEP origin URL not tracked | sources/2017/2017_PV_D2_AZUL.pdf | `73e191bcac00dd497b9f05346440f8de0d67a9261d933b48202965c82745a896` | yes |
| 2018 | D1 | GB | AZUL | Pre-existing local (enem v/2018/); INEP origin URL not tracked | sources/2018/2018_GB_D1_AZUL.pdf | `8962d77f20412f17adfebdda624b1487a91de808b9b8ef00561316bd9b9a7041` | yes |
| 2018 | D2 | GB | AZUL | Pre-existing local (enem v/2018/); INEP origin URL not tracked | sources/2018/2018_GB_D2_AZUL.pdf | `36ead3cbb0dc3032d2ebe89bdbb66de54777e311f8e8ffa57eec42756fa38e78` | yes |
| 2018 | D1 | PV | AZUL | Pre-existing local (enem v/2018/); INEP origin URL not tracked | sources/2018/2018_PV_D1_AZUL.pdf | `ec8c73472ad5d64e69224abd20cd837c4ca4b58b607a3804dcac47ff4ffbe3a8` | yes |
| 2018 | D2 | PV | AZUL | Pre-existing local (enem v/2018/); INEP origin URL not tracked | sources/2018/2018_PV_D2_AZUL.pdf | `aa4d234beed82606c95911c744bf137b10c9906397daf08e489dde1b13774ab5` | yes |
| 2019 | D1 | GB | AZUL | Pre-existing local (enem v/2019/); INEP origin URL not tracked | sources/2019/2019_GB_D1_AZUL.pdf | `64acd7f272276858a7baa0e5d1194c71964483afe3a258b240f535f9edb2afdc` | yes |
| 2019 | D2 | GB | AZUL | Pre-existing local (enem v/2019/); INEP origin URL not tracked | sources/2019/2019_GB_D2_AZUL.pdf | `f90f7be81fee2bf1648c4757c7f5361c7423bd4ea623868917ad5c9513d25644` | yes |
| 2019 | D1 | PV | AZUL | Pre-existing local (enem v/2019/); INEP origin URL not tracked | sources/2019/2019_PV_D1_AZUL.pdf | `67d6ada3312f0964bf9fac60c28c550d96dc453f1352e4a59a06c4449a11fbc6` | yes |
| 2019 | D2 | PV | AZUL | Pre-existing local (enem v/2019/); INEP origin URL not tracked | sources/2019/2019_PV_D2_AZUL.pdf | `fe36cf75ac3580709e40f058661c0d6b70abce41217bc55536af45f0c2883e20` | yes |
| 2020 | D1 | GB | AZUL | Pre-existing local (enem v/2020/); INEP origin URL not tracked | sources/2020/2020_GB_D1_AZUL.pdf | `18a2a04c1eecbec4f4dd77973f9ee32efe10829ebe30ca0dd9b286eb7f8672bb` | yes |
| 2020 | D2 | GB | AZUL | Pre-existing local (enem v/2020/); INEP origin URL not tracked | sources/2020/2020_GB_D2_AZUL.pdf | `9535cba49109a51196de35428d4d4951888b698186117ac2e7c4691b6da6d0f0` | yes |
| 2020 | D1 | PV | AZUL | Pre-existing local (enem v/2020/); INEP origin URL not tracked | sources/2020/2020_PV_D1_AZUL.pdf | `ab25200a67d34c0c0be86316572d5ca5a93d7836f005fc1a90b1f195f7e5fdd2` | yes |
| 2020 | D2 | PV | AZUL | Pre-existing local (enem v/2020/); INEP origin URL not tracked | sources/2020/2020_PV_D2_AZUL.pdf | `f9970a82e0ee67a31ec16e2f14c99e620738b88dfe7c68484128964a5d5d69bc` | yes |
| 2021 | D1 | GB | AZUL | Pre-existing local (enem v/2021/); INEP origin URL not tracked | sources/2021/2021_GB_D1_AZUL.pdf | `b9d1a2cca6ba38dbac52e437371af2557173d38bfe0d0cbc948b1060547eead4` | yes |
| 2021 | D2 | GB | AZUL | Pre-existing local (enem v/2021/); INEP origin URL not tracked | sources/2021/2021_GB_D2_AZUL.pdf | `c78b77767c239fb93350f502f2f9f83bcadc7ae467d77b0a6cd887de8b5f4cc7` | yes |
| 2021 | D1 | PV | AZUL | Pre-existing local (enem v/2021/); INEP origin URL not tracked | sources/2021/2021_PV_D1_AZUL.pdf | `387bfbd3c30074f595b59e404fc11619c5fdf0dec1d712520e9eb931bf348599` | yes |
| 2021 | D2 | PV | AZUL | Pre-existing local (enem v/2021/); INEP origin URL not tracked | sources/2021/2021_PV_D2_AZUL.pdf | `887b2a10ebb163f0c40db2ab4f67a5a4b5959ceb74ce7273466a755b8e55f540` | yes |
| 2022 | D1 | GB | AZUL | Pre-existing local (enem v/2022/); INEP origin URL not tracked | sources/2022/2022_GB_D1_AZUL.pdf | `023dda43b3b4e7b275d7155d9d856451dc14d607f891601c65f9a0fcc3c8ed7e` | yes |
| 2022 | D2 | GB | AZUL | Pre-existing local (enem v/2022/); INEP origin URL not tracked | sources/2022/2022_GB_D2_AZUL.pdf | `1b4b0cd0978bfc6c862d9631c4f8a5c25091938d09acfd2bd8c8b510764cb118` | yes |
| 2022 | D1 | PV | AZUL | Pre-existing local (enem v/2022/); INEP origin URL not tracked | sources/2022/2022_PV_D1_AZUL.pdf | `4aafd3567873578507f2bd47970c71d701c3db776654188b7d597e7284303adc` | yes |
| 2022 | D2 | PV | AZUL | Pre-existing local (enem v/2022/); INEP origin URL not tracked | sources/2022/2022_PV_D2_AZUL.pdf | `ab4cdea89504ab1bfc9435addacea482417cd82e9f220abaa6a317a10bd0b0f9` | yes |
| 2023 | D1 | GB | AZUL | Pre-existing local (enem v/2023/); INEP origin URL not tracked | sources/2023/2023_GB_D1_AZUL.pdf | `d01f0ca9e0855b69428cf0942585259d046a2d63706568fa73a1efefb760d5c1` | yes |
| 2023 | D2 | GB | AZUL | Pre-existing local (enem v/2023/); INEP origin URL not tracked | sources/2023/2023_GB_D2_AZUL.pdf | `cf40c0c8b19145440132673b11ec682ceef2e047eb1cfa1a2f19a0f908c12410` | yes |
| 2023 | D1 | PV | AZUL | Pre-existing local (enem v/2023/); INEP origin URL not tracked | sources/2023/2023_PV_D1_AZUL.pdf | `a993c42dbe6c804c15e50cbfc23ca9732b09b29d648585524d2e6425f6e0dcd6` | yes |
| 2023 | D2 | PV | AZUL | Pre-existing local (enem v/2023/); INEP origin URL not tracked | sources/2023/2023_PV_D2_AZUL.pdf | `6248d5e099267ab1db3ddf5e46b8cb1a83bb27d387528b9a8755ffba8ced1ba6` | yes |
| 2024 | D1 | GB | AZUL | Pre-existing local (enem v/2024/); INEP origin URL not tracked | sources/2024/2024_GB_D1_AZUL.pdf | `673d3d060156d6ad610ecf96c3dd0b8c61f361e16c57860c4ca5b5fecc8be050` | yes |
| 2024 | D2 | GB | AZUL | Pre-existing local (enem v/2024/); INEP origin URL not tracked | sources/2024/2024_GB_D2_AZUL.pdf | `8d27b5a447061e9a1c181d00a916d10f45e1c6c1da68d628b3ae8bdfedbf5c92` | yes |
| 2024 | D1 | PV | AZUL | Pre-existing local (enem v/2024/); INEP origin URL not tracked | sources/2024/2024_PV_D1_AZUL.pdf | `a818fc661cdee67325ddb11a053c7c51f452f3d14f24cdd6d2c37df09fb78b15` | yes |
| 2024 | D2 | PV | AZUL | Pre-existing local (enem v/2024/); INEP origin URL not tracked | sources/2024/2024_PV_D2_AZUL.pdf | `1f59c49412870316b060bb1ee34f583c3cb6d60cb88eb1a719dbe14fa4d57a7f` | yes |
| 2025 | D1 | GB | AZUL | Pre-existing local (enem v/2025/); INEP origin URL not tracked | sources/2025/2025_GB_D1_AZUL.pdf | `583ac1950cd1927c42c971c270f96c0e33816844084fd5866a13bf94d8e08a81` | yes |
| 2025 | D2 | GB | AZUL | Pre-existing local (enem v/2025/); INEP origin URL not tracked | sources/2025/2025_GB_D2_AZUL.pdf | `9e2d470af35378df532173414ec7077c3ce4df38c084a5f1258579fdf9270aef` | yes |
| 2025 | D1 | PV | AZUL | Pre-existing local (enem v/2025/); INEP origin URL not tracked | sources/2025/2025_PV_D1_AZUL.pdf | `cdda0ab286292f592573089d54c4c60750b2bbaf77890035a411bcf8bbcf4fac` | yes |
| 2025 | D2 | PV | AZUL | Pre-existing local (enem v/2025/); INEP origin URL not tracked | sources/2025/2025_PV_D2_AZUL.pdf | `aa0e95d1b9fd9a3fa2b5fb5e22a6ae6d49e26dc257ac437960a3f2b0936079e6` | yes |
