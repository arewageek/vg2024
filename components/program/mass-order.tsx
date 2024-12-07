"use client";

import { motion } from "framer-motion";

interface MassSection {
    title: string;
    content: string | string[];
    type?: "reading" | "response" | "default";
}

const massOrder: MassSection[] = [
    {
        title: "Important Notice",
        content: "In order to respect the dignity of the ceremony, we ask that there is no flash photography during mass. Also, please silence all cell phones and other electronic devices.",
        type: "default"
    },
    {
        title: "Introductory Rite",
        content: [
            "1. Entrance hymn: what a Joyful day",
            "2. Gloria: Ojima"
        ],
        type: "default"
    },
    {
        title: "Liturgy of the Word",
        content: "(Please be seated)",
        type: "default"
    },
    {
        title: "First Reading",
        content: [
            "A reading from the book of Genesis 2:18-24",
            "\"They shall become one flesh\"",
            "The LORD GOD said: \"It is not good that the man should be alone; I will make him a helper fit for him\". So out of the ground the LORD GOD formed every beast of the field and every bird of the air, and brought them to the man to see what he would call them; and whatever the man called every living creature, that was its name.",
            "The man gave names to all cattle, and to the birds of the air, and to every beast of the field; but for the man there was not found a helper fit for him. So the LORD GOD caused a deep sleep to fall upon the man, and while he slept took one of his ribs and closed up its place with flesh; and the rib which the LORD God had taken from the man he made into a woman and brought her to the man.",
            "Then the man said, \"This at last is none of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man.\"",
            "Therefore a man leaves his father and his mother and clings to his wife, and they become one flesh.",
            "The word of the LORD."
        ],
        type: "reading"
    },
    {
        title: "Response",
        content: "All: Thanks be to God",
        type: "response"
    },
    {
        title: "Responsorial Psalms",
        content: [
            "Psalms 33:12 and 18:20-21, 22",
            "The Lord's merciful love fills the earth.",
            "Blessed the nation whose God is the LORD, the people he had chosen as his heritage. Yes, the LORD'S eyes are on those who fear him, who hope in his merciful love.",
            "Our soul is waiting for the LORD. He is our help and our shield. In him do our hearts find joy. We trust in his holy name.",
            "May your merciful love be upon us, as we hope in you, O LORD."
        ],
        type: "reading"
    },
    {
        title: "Second Reading",
        content: [
            "A reading from the letter of Saint Paul to the Ephesians. 5:2a, 21-33",
            "\"This is a great mystery, and I mean in reference to Christ and the Church\"",
            "Brethren: Walk in love, as Christ loved us and gave himself up for us. Be subject to one another out of reverence for Christ.",
            "Wives, be subject to your husbands, as to the Lord. For the husband is the head of the wife as Christ is the head of the Church, his body, and is himself its saviour.",
            "As the Church is subject to Christ, so let wives also be subject in everything to their husbands. Husbands, love your wives, as Christ loved the Church and gave himself up for her, that he might sanctify her, having cleansed her by washing of water with the word, that he might present the Church to himself in splendour, without spot or wrinkle or any such thing, that she might be holy and without blemish.",
            "Even so husbands should love their wives as their own bodies. He who loves his wife loves himself. For no man ever hates his own flesh, but nourishes and cherishes it, as Christ does the Church, because we are members of his body. \"For this reason a man shall leave his father abs mother and be joined to his wife, and the two shall become one flesh.\"",
            "This is a great mystery, and I mean in reference to Christ and the Church; however, let each one of you love his wife as himself, and let the wife see that she respects her husband.",
            "The word of the Lord."
        ],
        type: "reading"
    },
    {
        title: "Response",
        content: "All: Thanks be to God",
        type: "response"
    },
    {
        title: "Gospel Acclamation",
        content: [
            "(Please Stand)",
            "Alleluia",
            "Or",
            "God is love; if God so loved us, we also ought to love one another."
        ],
        type: "default"
    },
    {
        title: "Gospel",
        content: [
            "A reading from the holy Gospel according to John. John 15:9-12",
            "\"Abide in my love\"",
            "At that time: Jesus said to his disciples, \"As the Father has loved me, so have I loved you; abide in my love.",
            "If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love.",
            "These things I have spoken to you, that my joy may be in you, and that your joy may be full. \"This is my commandment, that you love one another as I have loved you\".",
            "The Gospel of the Lord"
        ],
        type: "reading"
    },
    {
        title: "Response",
        content: "All: Praise to you, Lord Jesus Christ.",
        type: "response"
    },
    {
        title: "Rite of Marriage",
        content: [
            "Exchange of vows/ blessings of rings/ prayer of the faithful",
            "Offertory: Thanksgiving of Amazing Grace"
        ],
        type: "default"
    },
    {
        title: "Liturgy of the Eucharist",
        content: [
            "1. Presentation and preparation of gifts - Thanksgiving and love",
            "2. Eucharistic prayer",
            "3. The Lord's Prayer",
            "4. Nuptial blessing",
            "5. Holy Holy Holy: Mimo L'Odumare",
            "6. Sign of peace (please shake hands or embrace while saying \"peace be with you\")",
            "7. Breaking of the bread/ Lamb of God - Oyala ko'woicho",
            "8. Communion - Deeper in Love - God give us Christian homes",
            "9. Prayer after communion (please stand)"
        ],
        type: "default"
    },
    {
        title: "Concluding Rites",
        content: [
            "1. Signing of certificates",
            "2. Final blessings",
            "3. Recessional hymn/ parade"
        ],
        type: "default"
    }
];

export function MassOrder() {
    return (
        <div className="space-y-6">
            {massOrder.map((section, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 ${section.type === "reading" ? "bg-primary/5" :
                        section.type === "response" ? "bg-secondary/5" : ""
                        }`}
                >
                    <h3 className="font-heading text-lg text-primary mb-3">{section.title}</h3>
                    <div className="space-y-3 text-justify">
                        {Array.isArray(section.content) ? (
                            section.content.map((text, i) => (
                                <p key={i} className="text-text leading-relaxed">
                                    {text}
                                </p>
                            ))
                        ) : (
                            <p className="text-text leading-relaxed">{section.content}</p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}