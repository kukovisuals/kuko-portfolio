
module.exports = {
    
    "presets": [
        "react",
        [
            "env",
            {
                "modules": false, // this is the only change
                "targets": {
                    "browsers": ["last 2 versions", "IE >= 10"]
                },
                "useBuiltIns": "entry"
            }
        ]
    ]
};