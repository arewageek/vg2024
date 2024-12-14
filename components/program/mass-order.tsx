"use client";

import { motion } from "framer-motion";
import { LyricsButton } from "./lyrics/lyrics-button";
import { useState } from "react";
import { LyricsModal } from "./lyrics/lyrics-modal";
import { songs } from "./lyrics/songs";

interface MassSection {
    title: string;
    content: string | string[];
    type?: "reading" | "response" | "default";
    passage?: string
    response?: string
}

const readings: MassSection[] = [
    {
        title: "First Reading",
        passage: "A reading from the book of Genesis 2:18-24",
        content: [
            "\"They shall become one flesh\"",
            "The LORD GOD said: \"It is not good that the man should be alone; I will make him a helper fit for him\". So out of the ground the LORD GOD formed every beast of the field and every bird of the air, and brought them to the man to see what he would call them; and whatever the man called every living creature, that was its name.",
            "The man gave names to all cattle, and to the birds of the air, and to every beast of the field; but for the man there was not found a helper fit for him. So the LORD GOD caused a deep sleep to fall upon the man, and while he slept took one of his ribs and closed up its place with flesh; and the rib which the LORD God had taken from the man he made into a woman and brought her to the man.",
            "Then the man said, \"This at last is none of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man.\"",
            "Therefore a man leaves his father and his mother and clings to his wife, and they become one flesh.",
            "The word of the LORD."
        ],
        type: "reading"
    },
    { title: "Response", content: "All: Thanks be to God" },
    {
        title: "Responsorial Psalms",
        response: "The Lord's merciful love fills the earth.",
        passage: "Psalms 33:12 and 18:20-21, 22",
        content: [
            "Blessed the nation whose God is the LORD, the people he had chosen as his heritage. Yes, the LORD'S eyes are on those who fear him, who hope in his merciful love.",
            "Our soul is waiting for the LORD. He is our help and our shield. In him do our hearts find joy. We trust in his holy name.",
            "May your merciful love be upon us, as we hope in you, O LORD."
        ],
        type: "reading"
    },
    {
        title: "Second Reading",
        passage: "A reading from the letter of Saint Paul to the Ephesians. 5:2a, 21-33",
        content: [
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
        passage: "A reading from the holy Gospel according to John. John 15:9-12",
        content: [
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
];

export function MassOrder() {
    const [visibleLyrics, setVisibleLyrics] = useState<string>("")

    return (
        <>
            <div className="space-y-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 bg-primary/5"}`}
                >
                    <h3 className="font-heading text-lg text-[#F26B0F] mb-3">Introductory Rite</h3>
                    <div className="space-y-3 text-justify">
                        <p className="text-text leading-relaxed font-bold">
                            In order to respect the dignity of the ceremony, we ask that there is no flash photography during mass. Also, please silence all cell phones and other electronic devices.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 bg-primary/5"}`}
                >
                    <h3 className="font-heading text-lg text-[#F26B0F] mb-3">Introductory Rite</h3>
                    <div className="space-y-3 text-justify">
                        <ol className="text-text leading-relaxed list-decimal list-outside pl-4">
                            <li>
                                Entrance hymn: <LyricsButton songTitle="What a Joyful Day" onClick={() => setVisibleLyrics("What_a_Joyful_Day")} />
                            </li>
                            <li>
                                Gloria: <LyricsButton songTitle="Ojima" onClick={() => setVisibleLyrics("Ojima")} />
                            </li>
                        </ol>
                    </div>
                </motion.div>


                {readings.map((section, index) => (
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
                        <h3 className="font-heading text-lg text-[#F26B0F] mb-3">{section.title}</h3>
                        <div className="space-y-3 text-justify">
                            {section.passage && <h3 className="pb-5 font-bold">{section.passage}</h3>}
                            {section.response && <p className="py-3 font-semibold">Response: {section.response}</p>}

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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 bg-primary/5"}`}
                >
                    <h3 className="font-heading text-lg text-[#F26B0F] mb-3">Rite of Marriage</h3>
                    <div className="space-y-3 text-justify">
                        <p className="text-text leading-relaxed">
                            Exchange of vows/ blessings of rings/ prayer of the faithful
                        </p>

                        <p className="text-text leading-relaxed">
                            Offertory: <LyricsButton songTitle="Thanksgiving of Amazing Grace" onClick={() => setVisibleLyrics("ThanksgivingOfAmazingGraze")} />
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 bg-primary/5"}`}
                >
                    <h3 className="font-heading text-lg text-[#F26B0F] mb-3">Liturgy of the Eucharist</h3>
                    <div className="space-y-3 text-justify">
                        <ol className="text-text leading-relaxed list-decimal list-outside pl-4">
                            <li>
                                Presentation and preparation of gifts: <LyricsButton songTitle="Thanksgiving and love" onClick={() => setVisibleLyrics("Thanksgiving_and_love")} />
                            </li>
                            <li>
                                Eucharistic prayer
                            </li>
                            <li>
                                The Lord's Prayer
                            </li>
                            <li>Nuptial blessing</li>
                            <li>Holy Holy Holy: <LyricsButton songTitle="Mimo L'Odumare" onClick={() => setVisibleLyrics("mimo")} /></li>
                            <li>Sign of peace (please shake hands or embrace while saying <b>"peace be with you"</b>)</li>
                            <li>Breaking of the bread/ Lamb of God <LyricsButton songTitle="Oyala ko'woicho" onClick={() => setVisibleLyrics("oyala")} /></li>
                            <li>
                                Communion
                                {/* <LyricsButton songTitle="Deeper in Love" onClick={() => setVisibleLyrics("deeper_in_love")} /><br />
                                <LyricsButton songTitle="God give us Christian homes" onClick={() => setVisibleLyrics("christian_homes")} /> */}
                                <LyricsButton songTitle="Deeper in Love" onClick={() => setVisibleLyrics("inLoveWithJesus")} />
                                <LyricsButton songTitle="God Give Us Christian Homes" onClick={() => setVisibleLyrics("christian_homes")} />
                            </li>
                            <li>
                                Prayer after communion (please stand)
                            </li>
                        </ol>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`bg-surface p-6 rounded-xl border border-primary/10 bg-primary/5"}`}
                >
                    <h3 className="font-heading text-lg text-[#F26B0F] mb-3">Concluding Rites</h3>
                    <div className="space-y-3 text-justify">
                        <ol className="text-text leading-relaxed list-decimal list-outside pl-4">
                            <li>
                                Signing of certificates
                            </li>
                            <li>
                                Final blessings
                            </li>
                            <li>
                                Recessional hymn/ parade
                            </li>
                        </ol>
                    </div>
                </motion.div>
            </div>
            <LyricsModal isOpen={!!visibleLyrics} onClose={() => setVisibleLyrics("")} song={songs[visibleLyrics]} />
        </>
    );
}