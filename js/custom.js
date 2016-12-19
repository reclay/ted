var tagset = [
    {key: "AT ", value: "article (e.g. the, no)"},
    {key: "AT1 ", value: "singular article (e.g. a, an, every)"},
    {key: "BCL ", value: "before-clause marker (e.g. in order (that),in order (to))"},
    {key: "CC ", value: "coordinating conjunction (e.g. and, or)"},
    {key: "CCB ", value: "adversative coordinating conjunction ( but)"},
    {key: "CS ", value: "subordinating conjunction (e.g. if, because, unless, so, for)"},
    {key: "CSA ", value: "as (as conjunction)"},
    {key: "CSN ", value: "than (as conjunction)"},
    {key: "CST ", value: "that (as conjunction)"},
    {key: "CSW ", value: "whether (as conjunction)"},
    {key: "DA ", value: "after-determiner or post-determiner capable of pronominal function (e.g. such, former, same)"},
    {key: "DA1 ", value: "singular after-determiner (e.g. little, much)"},
    {key: "DA2 ", value: "plural after-determiner (e.g. few, several, many)"},
    {key: "DAR ", value: "comparative after-determiner (e.g. more, less, fewer)"},
    {key: "DAT ", value: "superlative after-determiner (e.g. most, least, fewest)"},
    {key: "DB ", value: "before determiner or pre-determiner capable of pronominal function (all, half)"},
    {key: "DB2 ", value: "plural before-determiner ( both)"},
    {key: "DD ", value: "determiner (capable of pronominal function) (e.g any, some)"},
    {key: "DD1 ", value: "singular determiner (e.g. this, that, another)"},
    {key: "DD2 ", value: "plural determiner ( these,those)"},
    {key: "DDQ ", value: "wh-determiner (which, what)"},
    {key: "DDQGE ", value: "wh-determiner, genitive (whose)"},
    {key: "DDQV ", value: "wh-ever determiner, (whichever, whatever)"},
    {key: "EX ", value: "existential there"},
    {key: "FO ", value: "formula"},
    {key: "FU ", value: "unclassified word"},
    {key: "FW ", value: "foreign word"},
    {key: "GE ", value: "germanic genitive marker - (' or's)"},
    {key: "IF ", value: "for (as preposition)"},
    {key: "II ", value: "general preposition"},
    {key: "IO ", value: "of (as preposition)"},
    {key: "IW ", value: "with, without (as prepositions)"},
    {key: "JJ ", value: "general adjective"},
    {key: "JJR ", value: "general comparative adjective (e.g. older, better, stronger)"},
    {key: "JJT ", value: "general superlative adjective (e.g. oldest, best, strongest)"},
    {key: "JK ", value: "catenative adjective (able in be able to, willing in be willing to)"},
    {key: "MC ", value: "cardinal number,neutral for number (two, three..)"},
    {key: "MC1 ", value: "singular cardinal number (one)"},
    {key: "MC2 ", value: "plural cardinal number (e.g. sixes, sevens)"},
    {key: "MCGE ", value: "genitive cardinal number, neutral for number (two's, 100's)"},
    {key: "MCMC ", value: "hyphenated number (40-50, 1770-1827)"},
    {key: "MD ", value: "ordinal number (e.g. first, second, next, last)"},
    {key: "MF ", value: "fraction,neutral for number (e.g. quarters, two-thirds)"},
    {key: "ND1 ", value: "singular noun of direction (e.g. north, southeast)"},
    {key: "NN ", value: "common noun, neutral for number (e.g. sheep, cod, headquarters)"},
    {key: "NN1 ", value: "singular common noun (e.g. book, girl)"},
    {key: "NN2 ", value: "plural common noun (e.g. books, girls)"},
    {key: "NNA ", value: "following noun of title (e.g. M.A.)"},
    {key: "NNB ", value: "preceding noun of title (e.g. Mr., Prof.)"},
    {key: "NNL1 ", value: "singular locative noun (e.g. Island, Street)"},
    {key: "NNL2 ", value: "plural locative noun (e.g. Islands, Streets)"},
    {key: "NNO ", value: "numeral noun, neutral for number (e.g. dozen, hundred)"},
    {key: "NNO2 ", value: "numeral noun, plural (e.g. hundreds, thousands)"},
    {key: "NNT1 ", value: "temporal noun, singular (e.g. day, week, year)"},
    {key: "NNT2 ", value: "temporal noun, plural (e.g. days, weeks, years)"},
    {key: "NNU ", value: "unit of measurement, neutral for number (e.g. in, cc)"},
    {key: "NNU1 ", value: "singular unit of measurement (e.g. inch, centimetre)"},
    {key: "NNU2 ", value: "plural unit of measurement (e.g. ins., feet)"},
    {key: "NP ", value: "proper noun, neutral for number (e.g. IBM, Andes)"},
    {key: "NP1 ", value: "singular proper noun (e.g. London, Jane, Frederick)"},
    {key: "NP2 ", value: "plural proper noun (e.g. Browns, Reagans, Koreas)"},
    {key: "NPD1 ", value: "singular weekday noun (e.g. Sunday)"},
    {key: "NPD2 ", value: "plural weekday noun (e.g. Sundays)"},
    {key: "NPM1 ", value: "singular month noun (e.g. October)"},
    {key: "NPM2 ", value: "plural month noun (e.g. Octobers)"},
    {key: "PN ", value: "indefinite pronoun, neutral for number (none)"},
    {key: "PN1 ", value: "indefinite pronoun, singular (e.g. anyone, everything, nobody, one)"},
    {key: "PNQO ", value: "objective wh-pronoun (whom)"},
    {key: "PNQS ", value: "subjective wh-pronoun (who)"},
    {key: "PNQV ", value: "wh-ever pronoun (whoever)"},
    {key: "PNX1 ", value: "reflexive indefinite pronoun (oneself)"},
    {key: "PPGE ", value: "nominal possessive personal pronoun (e.g. mine, yours)"},
    {key: "PPH1 ", value: "3rd person sing. neuter personal pronoun (it)"},
    {key: "PPHO1 ", value: "3rd person sing. objective personal pronoun (him, her)"},
    {key: "PPHO2 ", value: "3rd person plural objective personal pronoun (them)"},
    {key: "PPHS1 ", value: "3rd person sing. subjective personal pronoun (he, she)"},
    {key: "PPHS2 ", value: "3rd person plural subjective personal pronoun (they)"},
    {key: "PPIO1 ", value: "1st person sing. objective personal pronoun (me)"},
    {key: "PPIO2 ", value: "1st person plural objective personal pronoun (us)"},
    {key: "PPIS1 ", value: "1st person sing. subjective personal pronoun (I)"},
    {key: "PPIS2 ", value: "1st person plural subjective personal pronoun (we)"},
    {key: "PPX1 ", value: "singular reflexive personal pronoun (e.g. yourself, itself)"},
    {key: "PPX2 ", value: "plural reflexive personal pronoun (e.g. yourselves, themselves)"},
    {key: "PPY ", value: "2nd person personal pronoun (you)"},
    {key: "RA ", value: "adverb, after nominal head (e.g. else, galore)"},
    {key: "REX ", value: "adverb introducing appositional constructions (namely, e.g.)"},
    {key: "RG ", value: "degree adverb (very, so, too)"},
    {key: "RGQ ", value: "wh- degree adverb (how)"},
    {key: "RGQV ", value: "wh-ever degree adverb (however)"},
    {key: "RGR ", value: "comparative degree adverb (more, less)"},
    {key: "RGT ", value: "superlative degree adverb (most, least)"},
    {key: "RL ", value: "locative adverb (e.g. alongside, forward)"},
    {key: "RP ", value: "prep. adverb, particle (e.g about, in)"},
    {key: "RPK ", value: "prep. adv., catenative (about in be about to)"},
    {key: "RR ", value: "general adverb"},
    {key: "RRQ ", value: "wh- general adverb (where, when, why, how)"},
    {key: "RRQV ", value: "wh-ever general adverb (wherever, whenever)"},
    {key: "RRR ", value: "comparative general adverb (e.g. better, longer)"},
    {key: "RRT ", value: "superlative general adverb (e.g. best, longest)"},
    {key: "RT ", value: "quasi-nominal adverb of time (e.g. now, tomorrow)"},
    {key: "TO ", value: "infinitive marker (to)"},
    {key: "UH ", value: "interjection (e.g. oh, yes, um)"},
    {key: "VB0 ", value: "be, base form (finite i.e. imperative, subjunctive)"},
    {key: "VBDR ", value: "were"},
    {key: "VBDZ ", value: "was"},
    {key: "VBG ", value: "being"},
    {key: "VBI ", value: "be, infinitive (To be or not... It will be ..)"},
    {key: "VBM ", value: "am"},
    {key: "VBN ", value: "been"},
    {key: "VBR ", value: "are"},
    {key: "VBZ ", value: "is"},
    {key: "VD0 ", value: "do, base form (finite)"},
    {key: "VDD ", value: "did"},
    {key: "VDG ", value: "doing"},
    {key: "VDI ", value: "do, infinitive (I may do... To do...)"},
    {key: "VDN ", value: "done"},
    {key: "VDZ ", value: "does"},
    {key: "VH0 ", value: "have, base form (finite)"},
    {key: "VHD ", value: "had (past tense)"},
    {key: "VHG ", value: "having"},
    {key: "VHI ", value: "have, infinitive"},
    {key: "VHN ", value: "had (past participle)"},
    {key: "VHZ ", value: "has"},
    {key: "VM ", value: "modal auxiliary (can, will, would, etc.)"},
    {key: "VMK ", value: "modal catenative (ought, used)"},
    {key: "VV0 ", value: "base form of lexical verb (e.g. give, work)"},
    {key: "VVD ", value: "past tense of lexical verb (e.g. gave, worked)"},
    {key: "VVG ", value: "-ing participle of lexical verb (e.g. giving, working)"},
    {key: "VVGK ", value: "-ing participle catenative (going in be going to)"},
    {key: "VVI ", value: "infinitive (e.g. to give... It will work...)"},
    {key: "VVN ", value: "past participle of lexical verb (e.g. given, worked)"},
    {key: "VVNK ", value: "past participle catenative (e.g. bound in be bound to)"},
    {key: "VVZ ", value: "-s form of lexical verb (e.g. gives, works)"},
    {key: "XX ", value: "not, n't"},
    {key: "ZZ1 ", value: "singular letter of the alphabet (e.g. A,b)"},
    {key: "ZZ2 ", value: "plural letter of the alphabet (e.g. A's, b's)"}
];
var dataTable = "";
var app = new Vue({
    el: "#app",
    data: {
        showTable: false,
        currentDetail: -1,
        detail: {
            text: "test",
            tags: "test"
        },
        searchResults: [],
        searchWarning: "",
        showTagset: false,
        tagset: tagset
    },
    methods: {
        detailShow: function (index) {
            //获取以下修改detail的值

            //显示detail
            var detail = {};
            detail.text = app.searchResults[index].text.join("<br>");
            detail.tags = app.searchResults[index].tags.join("<br>");
            this.detail = detail;
            this.currentDetail = index;
        },
        detailHide: function (index) {
            this.currentDetail = -1;
        },
        tagsetToggle: function () {
            if (this.showTagset) {
                this.showTagset = false;
            } else {
                this.showTagset = true;
            }
        },
        search: function () {
            //添加search loading
            $("#search-submit").addClass("loading");
            //获取修改searchResults（可能需要datatable重新绑定）
            var value = $("#search-input").val();
            var selectValue = $("#search-select").val();
            if (value === "") {
                this.searchWarning = "输入值不能为空！";
                $("#search-submit").removeClass("loading");
            }
            else {
                var data = {"query_term": value, "flag": selectValue};
                var result = $.ajax({
                    url: "http://123.206.83.147:5000/api/query",
                    data: data,
                    dataType: "jsonp",
                    async: false,
                    success: function (data) {
                        if (data["results"].length === 0) {
                            app.searchWarning = "查询结果为空！";
                            app.showTable = false;
                            $("#search-submit").removeClass("loading");
                        } else {
                            app.searchResults = data["results"];
                            var length = data["results"].length;
                            app.searchWarning = "";
                            dataTable.clear();
                            for (var i = 0; i < length; i++) {
                                dataTable.row.add([
                                    data["results"][i].title,
                                    data["results"][i].hits,
                                    '<button class="btn btn-primary detail-button" data-id=' + i + '>show</button>'
                                ]);
                            }
                            dataTable.order([[1, 'desc']]).draw();
                            app.showTable = true;
                            $("#search-submit").removeClass("loading");
                        }
                        app.currentDetail = -1;
                    },
                    error: function () {
                        app.searchWarning = "服务器出问题了！";
                        $("#search-submit").removeClass("loading");
                    }
                });
            }
            return false;
        }
    },
    mounted: function () {
        dataTable = $(".data-table").dataTable({}).api();
        $("tbody").click(function (e) {
            if (e.target && e.target.nodeName == "BUTTON") {
                var index = parseInt($(e.target).attr("data-id"));
                var flag = $(e.target).text();
                if (flag === "show") {
                    $("tbody button").text("show");
                    $(e.target).text("hide");
                    var detail = {};
                    detail.text = app.searchResults[index].text;
                    detail.tags = app.searchResults[index].tags;
                    detail.text = detailTextChange(detail.text);
                    detail.tags = detailTextChange(detail.tags);
                    detail.text = detail.text.join("<br>");
                    detail.tags = detail.tags.join("<br>");
                    app.detail = detail;
                    app.currentDetail = index;
                } else {
                    $("tbody button").text("show");
                    $(e.target).text("show");
                    app.currentDetail = -1;
                }
            }
        });
        $(".data-table-tagset").dataTable({});
    }
});
function detailTextChange(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.match(/<b/) === null) {
            continue;
        }
        str = str.replace(/<b/g, '</span><b');
        str = str.replace(/<\/b>/g, '</b><span class="text-left detail-text">');
        newArr.push('<span class="text-right detail-text">' + str + '</span>');
    }
    return newArr;
}