gen-proto:
   protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/proto_build ./src/proto/*.proto