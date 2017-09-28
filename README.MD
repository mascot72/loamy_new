# Change LOG
## 2016.09.06
1. index.html 에서 script type="text/javascript" 제거 (모던 브라우저에서 javascript은 기본임)
    - https://oss.navercorp.com/smd/commons/commit/5f7855a19b3081c5bbadd802560e5c8321fbe623
2. pom.xml에서 spring boot version (1.3.5 -> 1.4.0)
    - https://oss.navercorp.com/smd/commons/commit/5068531e512ee34fafe4481ba50f99e733fbabd3
3. template view 개선
    - https://oss.navercorp.com/smd/commons/commit/5be6966f826e9267ee79e7a9a69c12a0d30619a6
4. actuator 추가
    - https://oss.navercorp.com/smd/commons/commit/fb3c22baf640d145fcd0bcbba87889da3d1a02d7
    
[error solution, isaac at 24,jan 2017] 
0. 오류를 해결한다
1. Maven Build 1st로 Build한다
2. Run As > Spring Boot App
3. 설정파일
src/main/resources-local/application.properties
port : 8088


To After Developer
[*******************************************************]
Modifier/Author by Isaac Choi (at 1 jan 2017)
기준 : 반응형디자인
인증 :  Token , OAuth - jwt.io
Source Control : Git

