var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
    return Carro;
}());
function CriarCarro() {
    var marca = prompt("Insira a marca do carro");
    var modelo = prompt("Insira o modelo do carro");
    var categoria = prompt("Insira a categoria do carro");
    var ano = Number(prompt("Insira o ano do carro"));
    var quilometragem = Number(prompt("Insira a quilometragem do carro"));
    var valor = Number(prompt("Insira o Valor do carro"));
    var carroNovo = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
    return carroNovo;
}
function Get() {
    return fetch("https://apigenerator.dronahq.com/api/ckev-x7x/Carros")
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
}
function GetId(url) {
    if (url === void 0) { url = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function Post(url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function Delete(url) {
    if (url === void 0) { url = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function Put(url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function Fluxo() {
    return __awaiter(this, void 0, void 0, function () {
        var id, url, condition, opcao, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    condition = true;
                    _d.label = 1;
                case 1:
                    if (!condition) return [3 /*break*/, 15];
                    opcao = prompt("Insira a opção desejada, (1: chamar todas os obejtos / 2: chamar um objeto pelo ID / 3: Inserir e criar um novo objeto / 4: Deletar um objeto / 5: Atualizar um objeto / 6: Encerrar o programa)");
                    _a = opcao;
                    switch (_a) {
                        case "1": return [3 /*break*/, 2];
                        case "2": return [3 /*break*/, 4];
                        case "3": return [3 /*break*/, 6];
                        case "4": return [3 /*break*/, 8];
                        case "5": return [3 /*break*/, 10];
                        case "6": return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 13];
                case 2: return [4 /*yield*/, Get()];
                case 3:
                    _d.sent();
                    return [3 /*break*/, 14];
                case 4:
                    id = prompt("Insira o ID do objeto");
                    url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros/" + id;
                    _c = (_b = console).log;
                    return [4 /*yield*/, GetId(url)];
                case 5:
                    _c.apply(_b, [_d.sent()]);
                    return [3 /*break*/, 14];
                case 6:
                    url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros";
                    return [4 /*yield*/, Post(url, CriarCarro())];
                case 7:
                    _d.sent();
                    return [3 /*break*/, 14];
                case 8:
                    id = prompt("Insira o ID do objeto");
                    url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros/" + id;
                    return [4 /*yield*/, Delete(url)];
                case 9:
                    _d.sent();
                    return [3 /*break*/, 14];
                case 10:
                    id = prompt("Insira o ID do objeto");
                    url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros/" + id;
                    return [4 /*yield*/, Put(url, CriarCarro())
                            .then(function (response) {
                            console.log('Resposta:', response);
                        })
                            .catch(function (error) {
                            console.error('Erro:', error);
                        })];
                case 11:
                    _d.sent();
                    return [3 /*break*/, 14];
                case 12:
                    console.log("Programa encerrado com sucesso");
                    condition = false;
                    return [3 /*break*/, 14];
                case 13:
                    console.log("Opção inserida inválida");
                    condition = false;
                    return [3 /*break*/, 14];
                case 14: return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
}
