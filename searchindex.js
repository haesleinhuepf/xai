Search.setIndex({"docnames": ["00_setup/readme", "30_shap/object_classification", "30_shap/pixel_classifier", "60_grad-cam/classification_resnet", "imprint", "intro"], "filenames": ["00_setup/readme.md", "30_shap/object_classification.ipynb", "30_shap/pixel_classifier.ipynb", "60_grad-cam/classification_resnet.ipynb", "imprint.md", "intro.md"], "titles": ["Setting up your computer", "Explaining Object classification using SHAP", "Pixel classification explained with SHAP", "Inspecting the intermediate results / layer outputs", "Imprint", "Explainable Artificial Intelligence Notebooks"], "terms": {"thi": [0, 1, 2, 5], "chapter": 0, "provid": [0, 2], "instruct": 0, "To": [0, 1], "execut": [0, 2], "notebook": [0, 1, 2], "collect": [0, 2, 5], "highli": 0, "us": [0, 2, 3, 5], "cuda": 0, "compat": 0, "nvidia": 0, "graphic": 0, "card": 0, "least": 0, "4gb": 0, "memori": 0, "These": 0, "were": [0, 1, 2], "test": [0, 1], "window": 0, "10": [0, 1, 2, 3, 4], "laptop": 0, "an": [0, 1, 2, 4], "rtx": 0, "3050": 0, "mobil": 0, "when": 0, "work": [0, 2], "we": [0, 1, 2, 5], "make": [0, 3], "mani": 0, "plugin": 0, "softwar": 0, "librari": [0, 1], "which": [0, 1, 2], "need": [0, 1, 2, 3], "organ": 0, "One": 0, "wai": 0, "do": 0, "manag": 0, "A": 0, "can": [0, 1, 2, 3], "seen": 0, "virtual": 0, "desktop": 0, "access": 0, "via": 0, "termin": 0, "If": [0, 2], "you": [0, 2, 3, 5], "some": [0, 1], "one": [0, 2], "mai": [0, 3], "from": [0, 1, 2, 3, 5], "anoth": 0, "break": 0, "e": [0, 4], "g": 0, "incompat": 0, "wa": [0, 1], "just": 0, "new": [0, 2], "start": 0, "over": 0, "see": [0, 2, 5], "also": [0, 2, 3], "scientif": 0, "mamba": 0, "friend": 0, "data": [0, 5], "analysi": [0, 1], "get": [0, 3], "mambaforg": 0, "download": 0, "miniforg": 0, "distribut": 0, "alreadi": 0, "have": 0, "old": 0, "ana": 0, "haven": 0, "t": [0, 2], "touch": 0, "while": 0, "uninstal": 0, "instead": 0, "For": [0, 1, 2], "eas": 0, "add": [0, 1], "path": 0, "variabl": 0, "dure": 0, "creat": [0, 2, 3, 5], "command": [0, 2], "It": [0, 5], "The": [0, 1, 2, 3, 5], "should": 0, "too": 0, "deep": 0, "learn": [0, 2], "requir": 0, "power": 0, "env": [0, 3], "f": [0, 1, 2, 3], "http": [0, 3], "raw": 0, "githubusercont": 0, "com": 0, "haesleinhuepf": 0, "xai": [0, 5], "main": [0, 1], "doc": 0, "00_setup": 0, "yml": 0, "s": [0, 1], "In": [1, 2, 5], "segment": [1, 2], "imag": [1, 2, 3], "them": 1, "shape": [1, 2, 3], "measur": 1, "what": [1, 2, 3], "role": 1, "differ": 1, "descriptor": 1, "plai": 1, "import": [1, 2, 3], "numpi": [1, 2, 3], "np": [1, 2, 3], "skimag": [1, 2, 3], "io": [1, 2, 3], "imread": [1, 2, 3], "label": 1, "regionprops_t": 1, "panda": [1, 2], "pd": [1, 2], "sklearn": [1, 2], "ensembl": [1, 2], "randomforestclassifi": [1, 2], "model_select": 1, "train_test_split": 1, "stackview": [1, 2, 3], "blob": 1, "exampl": [1, 2], "contain": [1, 2], "multipl": [1, 2], "could": 1, "group": 1, "accord": 1, "size": [1, 2, 3], "8": [1, 2, 3, 4], "center": [1, 2, 5], "identifi": 1, "load": [1, 2, 3], "tif": [1, 2], "appli": 1, "threshold": 1, "binari": [1, 2], "120": 1, "connect": 1, "compon": 1, "matplotlib": [1, 2, 3], "pyplot": [1, 2, 3], "plt": [1, 2, 3], "fig": 1, "ax": 1, "subplot": [1, 3], "1": [1, 2, 3, 4], "2": [1, 2, 3], "figsiz": [1, 2, 3], "4": [1, 2, 3, 4], "imshow": [1, 3], "plot": [1, 2, 3], "0": [1, 2, 3, 4], "allow": 1, "featur": [1, 3], "comput": 1, "scikit": [1, 2], "area": 1, "perimet": 1, "mean_intens": 1, "max_intens": 1, "min_intens": 1, "eccentr": 1, "solid": 1, "extent": 1, "minor_axis_length": 1, "major_axis_length": 1, "intensity_imag": 1, "df": [1, 2], "datafram": [1, 2], "aspect": 1, "ratio": 1, "column": [1, 2], "aspect_ratio": 1, "displai": [1, 2, 3], "head": 1, "433": 1, "91": 1, "254834": 1, "190": 1, "854503": 1, "232": 1, "128": 1, "876649": 1, "881874": 1, "555128": 1, "16": 1, "819060": 1, "34": 1, "957399": 1, "078439": 1, "185": 1, "53": 1, "556349": 1, "179": 1, "286486": 1, "224": 1, "828189": 1, "968586": 1, "800866": 1, "11": 1, "803854": 1, "21": 1, "061417": 1, "784283": 1, "3": [1, 2, 3], "658": 1, "95": 1, "698485": 1, "205": 1, "617021": 1, "248": 1, "352060": 1, "977712": 1, "870370": 1, "28": 1, "278264": 1, "30": 1, "212552": 1, "068402": 1, "434": 1, "76": 1, "870058": 1, "217": 1, "327189": 1, "341084": 1, "973094": 1, "820416": 1, "23": 1, "064079": 1, "24": 1, "535398": 1, "063793": 1, "5": [1, 2, 3], "477": 1, "83": 1, "798990": 1, "212": 1, "142558": 1, "771328": 1, "977459": 1, "865699": 1, "19": 1, "833058": 1, "31": 1, "162612": 1, "571246": 1, "next": [1, 2], "hand": 1, "drawn": 1, "convert": 1, "tabular": 1, "format": 1, "first": [1, 2], "maximum": [1, 2, 3], "intens": 1, "per": [1, 4], "annotation_imag": 1, "blobs_label_annot": 1, "annotation_prop": 1, "annotation_df": 1, "renam": 1, "merg": 1, "len": [1, 3], "64": [1, 2], "therefor": 1, "exctract": 1, "onli": 1, "annotated_df": 1, "12": 1, "prepar": 1, "feature_column": 1, "x": [1, 2], "y": [1, 2], "split": 1, "x_train": 1, "x_test": 1, "y_train": 1, "y_test": 1, "test_siz": 1, "random_st": [1, 2], "42": 1, "model": [1, 3], "rf": 1, "n_estim": 1, "100": [1, 3], "fit": [1, 2], "print": [1, 2, 3], "accuraci": 1, "score": 1, "3f": 1, "000": 1, "333": 1, "now": [1, 2], "entir": 1, "dataset": 1, "y_": 1, "predict": 1, "arrai": [1, 2], "map": [1, 3, 5], "result": 1, "copi": 1, "i": [1, 3], "label_id": 1, "enumer": [1, 3], "uniqu": 1, "skip": 1, "background": [1, 2], "show": [1, 2, 3], "insight": [1, 2, 3], "254": 1, "nbsp": [1, 2, 3], "256": [1, 3], "dtypeint32": 1, "size254": 1, "kb": [1, 2, 3], "min0max3": 1, "necessari": 1, "calcul": [1, 2], "treeexplain": [1, 2], "shap_valu": [1, 2], "summary_plot": [1, 2], "feature_nam": [1, 2], "draw": 1, "summari": [1, 2], "class": [1, 3, 5], "shaplei": [2, 5], "addit": [2, 5], "explan": [2, 5], "techniqu": [2, 5], "visual": 2, "how": [2, 5], "document": 2, "valu": 2, "ipython": [2, 3], "imsav": 2, "util": [2, 3], "format_data": 2, "add_background": 2, "generate_feature_stack": 2, "visualize_image_list": [2, 3], "apply_threshold_rang": 2, "get_plt_figur": 2, "As": 2, "crop": [2, 3], "modifi": 2, "bbbc038v1": 2, "avail": 2, "broad": 2, "bioimag": 2, "benchmark": 2, "caicedo": 2, "et": 2, "al": [2, 4], "natur": 2, "method": 2, "2019": 2, "0bf4b1": 2, "106": 2, "166": 2, "60": 2, "dtypefloat64": 2, "size28": 2, "min5": 2, "0max127": 2, "71186440677967": 2, "binary_mask": 2, "anim": 2, "zoom_factor": 2, "demonstr": 2, "algorithm": 2, "annot": 2, "two": 2, "small": 2, "region": 2, "left": 2, "foreground": 2, "object": 2, "manual_annot": 2, "fals": [2, 3], "zero": [2, 3], "dtype": [2, 3], "uint32": 2, "note": 2, "true": [2, 3], "your": 2, "mous": 2, "abov": [2, 3], "befor": 2, "cell": 2, "annotation_filenam": 2, "0bf4b1_annot": 2, "els": 2, "animate_curtain": 2, "alpha": [2, 3], "6": [2, 3], "take": 2, "input": [2, 3], "typic": 2, "call": 2, "becaus": 2, "everi": 2, "exist": 2, "follow": 2, "three": 2, "origin": 2, "after": 2, "gaussian": 2, "blur": 2, "process": 2, "through": 2, "sobel": 2, "oper": 2, "thu": 2, "denois": 2, "detect": 2, "edg": 2, "all": 2, "serv": 2, "differenti": 2, "posit": 2, "neg": 2, "top_hat": 2, "gaussian_sobel": 2, "feature_stack": 2, "so": 2, "expect": 2, "ask": 2, "n": 2, "m": 2, "correspond": 2, "number": [2, 5], "our": 2, "case": [2, 5], "969": 2, "max_depth": 2, "jupyt": [2, 5], "environ": 2, "pleas": [2, 5], "rerun": 2, "html": 2, "represent": 2, "trust": 2, "On": 2, "github": [2, 5], "unabl": 2, "render": 2, "try": 2, "page": [2, 5], "nbviewer": 2, "org": [2, 3], "randomforestclassifierifittedrandomforestclassifi": 2, "ha": 2, "been": 2, "whole": 2, "code": 2, "ar": [2, 3, 5], "more": 2, "asarrai": 2, "ravel": 2, "reshap": 2, "def": [2, 3], "visualize_shap": 2, "target_class": 2, "figur": 2, "larger": 2, "better": 2, "visibl": 2, "40": 2, "name": [2, 4], "style": 2, "titl": 2, "impact": 2, "pad": 2, "20": 2, "xlabel": 2, "tight_layout": 2, "r": 2, "rang": [2, 3], "14": 2, "seaborn": 2, "sn": 2, "correl": 2, "matrix": 2, "correlation_matrix": 2, "corr": 2, "heatmap": 2, "cmap": 2, "prgn": 2, "purpl": 2, "green": 2, "diverg": 2, "colormap": [2, 3], "vmin": 2, "set": 2, "minimum": 2, "vmax": 2, "fmt": 2, "2f": 2, "decim": 2, "place": 2, "defin": 2, "opps": 2, "henc": 2, "enough": 2, "complet": 2, "here": 2, "predic": 2, "blue": 2, "second": 2, "orang": 2, "interpret": 2, "laplac": 2, "gaussian_laplac": 2, "procedur": 2, "torchvis": [3, 5], "bia_bob": 3, "resnet50": 3, "transform": 3, "resiz": 3, "torch": 3, "functool": 3, "partial": 3, "markdown": 3, "resnet50_weight": 3, "w": 3, "default": 3, "meta": 3, "categori": 3, "tench": 3, "goldfish": 3, "great": 3, "white": 3, "shark": 3, "tiger": 3, "hammerhead": 3, "class_to_idx": 3, "cl": 3, "idx": 3, "flagpol": 3, "557": 3, "1000": 3, "resnet_model": 3, "weight": 3, "progress": 3, "c": 3, "user": 3, "rober": 3, "miniforge3": 3, "genai": 3, "gpu": 3, "lib": 3, "site": 3, "packag": 3, "_util": 3, "py": 3, "223": 3, "userwarn": 3, "argument": 3, "other": 3, "than": 3, "enum": 3, "none": 3, "deprec": 3, "sinc": 3, "13": 3, "remov": 3, "futur": 3, "current": [3, 5], "behavior": 3, "equival": 3, "pass": 3, "imagenet1k_v1": 3, "most": 3, "up": 3, "date": 3, "warn": 3, "msg": 3, "original_imag": 3, "htw": 3, "front": 3, "cc": [3, 4], "sa": 3, "png": 3, "licens": 3, "BY": [3, 4], "dresden": [3, 4, 5], "peter": 3, "sebb": 3, "de": [3, 4], "wikipedia": 3, "wiki": 3, "hochschule_f": 3, "c3": 3, "bcr_technik_und_wirtschaft_dresden": 3, "media": 3, "datei": 3, "bcr_technik_und_wirtschaft_": 3, "_dresden_": 3, "_zentralgeb": 3, "a4ud": 3, "_campus_friedrich_list_platz": 3, "jpg": 3, "885": 3, "1509": 3, "1100": 3, "1703": 3, "palac": 3, "bvg": 3, "2154": 3, "2395": 3, "2000": 3, "2355": 3, "kitchen_cat": 3, "preserve_rang": 3, "astyp": 3, "uint8": 3, "400": 3, "dtypeuint8": 3, "size468": 3, "min0max255": 3, "input_tensor": 3, "totensor": 3, "unsqueez": 3, "store": 3, "gradcam": 3, "__init__": 3, "self": 3, "feature_map": 3, "regist": 3, "hook": 3, "target_lay": 3, "layer4": 3, "last": 3, "resnet": 3, "register_forward_hook": 3, "save_feature_map": 3, "register_full_backward_hook": 3, "save_gradi": 3, "modul": 3, "grad_input": 3, "grad_output": 3, "eval": 3, "layer1": 3, "layer2": 3, "layer3": 3, "inp": 3, "out": 3, "grad_cam": 3, "layer_featur": 3, "detach": 3, "num_fig": 3, "512": 3, "50": 3, "1024": 3, "25": [3, 4], "2048": 3, "argmax": 3, "tensor": 3, "436": 3, "class_idx": 3, "axi": 3, "beach": 3, "wagon": 3, "zero_grad": 3, "one_hot": 3, "zeros_lik": 3, "backward": 3, "feature_weight": 3, "mean": 3, "dim": 3, "8505e": 3, "05": 3, "3461e": 3, "04": 3, "0150e": 3, "max": 3, "0012": 3, "num_featur": 3, "image_nam": 3, "append": 3, "cpu": 3, "cam": [3, 5], "float32": 3, "multipli": 3, "sum": 3, "projected_cam": 3, "dtypefloat32": 3, "size676": 3, "b": [3, 4], "min0": 3, "0max0": 3, "16129449": 3, "upsampled_cam": 3, "size625": 3, "16114752": 3, "continue_draw": 3, "viridi": 3, "show_cam_for_class": 3, "class_nam": 3, "chang": 3, "classif": 3, "car": 3, "dr": 4, "rer": 4, "medic": 4, "robert": 4, "haas": 4, "telefon": 4, "49": 4, "341": 4, "97": 4, "39309": 4, "mail": 4, "uni": 4, "leipzig": [4, 5], "scad": [4, 5], "ai": [4, 5], "universit\u00e4t": 4, "humboldstra\u00df": 4, "04105": 4, "die": 4, "unser": 4, "seiten": 4, "wurden": 4, "mit": 4, "gr\u00f6\u00dfter": 4, "sorgfalt": 4, "erstellt": 4, "richtigkeit": 4, "vollst\u00e4ndigkeit": 4, "und": [4, 5], "aktualit\u00e4t": 4, "der": 4, "k\u00f6nnen": 4, "wir": 4, "jedoch": 4, "kein": 4, "gew\u00e4hr": 4, "\u00fcbernehmen": 4, "diensteanbiet": 4, "sind": 4, "7": 4, "eigen": 4, "auf": 4, "diesen": 4, "allgemeinen": 4, "gesetzen": 4, "bi": 4, "nicht": 4, "verpflichtet": 4, "\u00fcbermittelt": 4, "oder": 4, "gespeichert": 4, "fremd": 4, "informationen": 4, "zu": 4, "\u00fcberwachen": 4, "umst\u00e4nden": 4, "forschen": 4, "ein": 4, "rechtswidrig": 4, "t\u00e4tigkeit": 4, "hinweisen": 4, "verpflichtungen": 4, "zur": 4, "entfernung": 4, "sperrung": 4, "nutzung": 4, "von": 4, "bleiben": 4, "hiervon": 4, "unber\u00fchrt": 4, "diesbez\u00fcglich": 4, "ist": 4, "erst": 4, "dem": 4, "zeitpunkt": 4, "kenntni": 4, "einer": 4, "konkreten": 4, "rechtsverletzung": 4, "m\u00f6glich": 4, "bei": 4, "bekanntwerden": 4, "entsprechenden": 4, "rechtsverletzungen": 4, "werden": 4, "dies": 4, "umgehend": 4, "entfernen": 4, "angebot": 4, "enth\u00e4lt": 4, "externen": 4, "webseiten": 4, "dritter": 4, "deren": 4, "keinen": 4, "einfluss": 4, "haben": 4, "deshalb": 4, "fremden": 4, "auch": 4, "verlinkten": 4, "stet": 4, "jeweilig": 4, "anbiet": 4, "betreib": 4, "zum": 4, "verlinkung": 4, "rechtsverst\u00f6\u00df": 4, "\u00fcberpr\u00fcft": 4, "waren": 4, "erkennbar": 4, "permanent": 4, "inhaltlich": 4, "kontrol": 4, "ohn": 4, "konkret": 4, "anhaltspunkt": 4, "zumutbar": 4, "derartig": 4, "durch": 4, "seitenbetreib": 4, "erstellten": 4, "werk": 4, "unterliegen": 4, "deutschen": 4, "vervielf\u00e4ltigung": 4, "bearbeitung": 4, "verbreitung": 4, "jede": 4, "art": 4, "verwertung": 4, "au\u00dferhalb": 4, "grenzen": 4, "gestattet": 4, "unter": 4, "einhaltung": 4, "lizenzbedingungen": 4, "creativ": 4, "common": 4, "lizenz": 4, "soweit": 4, "dieser": 4, "seit": 4, "vom": 4, "beachtet": 4, "insbesonder": 4, "solch": 4, "gekennzeichnet": 4, "sollten": 4, "sie": 4, "trotzdem": 4, "urheberrechtsverletzung": 4, "aufmerksam": 4, "bitten": 4, "um": 4, "einen": 4, "hinwei": 4, "webseit": 4, "regel": 4, "angab": 4, "personenbezogen": 4, "daten": 4, "unseren": 4, "beispielsweis": 4, "anschrift": 4, "email": 4, "adressen": 4, "erhoben": 4, "erfolgt": 4, "di": 4, "freiwillig": 4, "basi": 4, "ihr": 4, "ausdr\u00fccklich": 4, "zustimmung": 4, "dritt": 4, "weitergegeben": 4, "weisen": 4, "darauf": 4, "hin": 4, "dass": 4, "daten\u00fcbertragung": 4, "im": 4, "internet": 4, "z": 4, "kommunik": 4, "sicherheitsl\u00fccken": 4, "aufweisen": 4, "kann": 4, "l\u00fcckenlos": 4, "schutz": 4, "vor": 4, "zugriff": 4, "rahmen": 4, "impressumspflicht": 4, "ver\u00f6ffentlichten": 4, "kontaktdaten": 4, "\u00fcbersendung": 4, "angefordert": 4, "werbung": 4, "informationsmaterialien": 4, "wird": 4, "hiermit": 4, "widersprochen": 4, "behalten": 4, "sich": 4, "rechtlich": 4, "schritt": 4, "fall": 4, "unverlangten": 4, "zusendung": 4, "werbeinformationen": 4, "etwa": 4, "spam": 4, "about": 5, "focus": 5, "certain": 5, "aim": 5, "scientist": 5, "programm": 5, "who": 5, "want": 5, "dive": 5, "contribut": 5, "feedback": 5, "veri": 5, "welcom": 5, "room": 5, "improv": 5, "issu": 5, "consid": 5, "shap": 5, "gradient": 5, "base": 5, "activ": 5, "grad": 5, "non": 5, "standard": 5, "field": 5, "financi": 5, "support": 5, "feder": 5, "ministri": 5, "educ": 5, "research": 5, "germani": 5, "s\u00e4chsisch": 5, "staatsministerium": 5, "f\u00fcr": 5, "wissenschaft": 5, "kultur": 5, "tourismu": 5, "excel": 5, "scalabl": 5, "analyt": 5, "project": 5, "identif": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"set": 0, "up": 0, "your": 0, "comput": 0, "hardwar": 0, "python": [0, 5], "conda": 0, "environ": 0, "instal": 0, "mini": 0, "forg": 0, "gpu": 0, "version": 0, "recommend": 0, "cpu": 0, "onli": 0, "activ": 0, "explain": [1, 2, 5], "object": 1, "classif": [1, 2], "us": 1, "shap": [1, 2], "extract": 1, "region": 1, "properti": 1, "annot": 1, "data": [1, 2], "train": [1, 2], "random": [1, 2], "forest": [1, 2], "classifi": [1, 2], "valu": 1, "exercis": [1, 2, 3], "pixel": 2, "gener": 2, "featur": 2, "stack": 2, "format": 2, "predict": 2, "class": 2, "One": 2, "again": 2, "inspect": 3, "intermedi": 3, "result": 3, "layer": 3, "output": 3, "determin": 3, "gradient": 3, "imprint": 4, "impressum": 4, "angaben": 4, "gem\u00e4\u00df": 4, "5": 4, "tmg": 4, "kontakt": 4, "verantwortlich": 4, "f\u00fcr": 4, "den": 4, "inhalt": 4, "nach": 4, "55": 4, "ab": 4, "2": 4, "rstv": 4, "haftungsausschluss": 4, "haftung": 4, "link": 4, "urheberrecht": 4, "datenschutz": 4, "artifici": 5, "intellig": 5, "notebook": 5, "topic": 5, "cover": 5, "librari": 5, "softwar": 5, "acknowledg": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})