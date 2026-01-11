@echo off
set "JAVA_HOME=c:\proyectos\videosportafolio\.local-jdk\jdk21.0.9_10"
set "PATH=%JAVA_HOME%\bin;%PATH%"
echo Using JAVA_HOME: %JAVA_HOME%
java -version
echo.
echo Starting Video Portfolio Application...
java -jar target\video-portfolio-0.0.1-SNAPSHOT.jar
