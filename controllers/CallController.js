
exports.store = (req, res) => {
    res.json({
        "uip": null,
        "uuid": null,
        "fk_url": null,
        "source": null,
        "channel": null,
        "id_call": "1592552969.1513",
        "keyword": null,
        "campaign": null,
        "adcontent": null,
        "fk_status": "ANSWER",
        "from_phone": {},
        "record_link": "1592552969.1513-2020-06-19-10_49-00972527599438-380931705937.wav",
        "fk_who_raised": {},
        "fk_scheme_phone": {},
        "fk_sourse_phones": {}
    })
}

exports.get = (req, res) => {
    res.send("Test ...")
}