FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
COPY ./src .
ENV ASPNETCORE_URLS http://*:5010
ENV ASPNETCORE_ENVIRONMENT docker
EXPOSE 5010
ENTRYPOINT dotnet Planner.Api.dll