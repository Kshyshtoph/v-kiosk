FROM nginxinc/nginx-unprivileged
RUN rm -rf /etc/nginx/html/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY ./html /etc/nginx/html
WORKDIR /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]