FROM microsoft/dotnet:2.2-sdk-alpine AS dotnet-builder
WORKDIR /src
# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore
# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

FROM node:alpine AS node-build
WORKDIR /src
COPY ./ClientApp/package.json .
RUN npm install
COPY ./ClientApp .
RUN npm run build

FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /app
COPY --from=dotnet-builder ./src/out .
COPY --from=node-build ./src/build ./ClientApp/build
ENV ASPNETCORE_URLS http://+:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "Planner.dll"]