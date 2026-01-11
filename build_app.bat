@echo off
set "JAVA_HOME=c:\proyectos\videosportafolio\.local-jdk\jdk21.0.9_10"
set "PATH=%JAVA_HOME%\bin;%PATH%"
echo Using JAVA_HOME: %JAVA_HOME%
java -version
echo.
echo Starting Maven Build...
call "c:\proyectos\videosportafolio\.local-maven\apache-maven-3.9.6\bin\mvn.cmd" clean package -DskipTests
if %ERRORLEVEL% NEQ 0 (
    echo Build Failed!
    exit /b %ERRORLEVEL%
)
echo Build Success!
