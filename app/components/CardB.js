import { Fragment } from "react";
import { basePath } from "../basePath";
import { CloudIcon, SpinnerIcon, UserIcon, FlaskIcon } from "./Icons";

const DATES = [
  {
    creation: "1989-1992",
    developpement: 1994,
    abandon: "2000-2006",
    compatibilite: "2007-2014",
  },
];

export default function CardB() {
  return (
    <>
      <section>
        <h2>&lt;/&gt;Le World Wide Web 1989</h2>
        <p>
          Timothy John Berners-Lee, né le 8 juin 1955 à Londres, est un
          citoyen britannique, principal inventeur du World Wide Web (WWW) au
          tournant des années 1990. En juillet 2004, il est anobli par la
          reine Élisabeth II pour ce travail et son nom officiel devient Sir
          Timothy John Berners-Lee. Depuis 1994, il préside le World Wide Web
          Consortium (W3C), organisme qu&apos;il a fondé.
        </p>
        <figure>
          <div className="picture">
            <img
              src={`${basePath}/images/Tim-Berners-Lee.jpg`}
              alt="Tim Berners lee"
            />
          </div>

          <figcaption>
            <p>
              En 1980, il intègre le Conseil européen pour la recherche
              nucléaire (CERN). Sur son lieu de travail, il est connecté au
              réseau interne et à l&apos;ARPANET. En mars 1989, Tim
              Berners-Lee propose à Mike Sendall, son supérieur, un projet de
              système de gestion de l&apos;information, une proposition que
              son chef commente comme « vague mais excitante ». Cette
              annotation sera le point de départ du projet car elle autorise
              Tim Berners-Lee à travailler dans ce domaine à titre
              expérimental.
            </p>
            <cite>
              «Je n&apos;ai fait que prendre le principe d&apos;hypertexte et
              le relier au principe du TCP et du DNS et alors – boum ! – ce
              fut le World Wide Web»
            </cite>
            <p>Actuellement il est le directeur du W3C</p>
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>&lt;/&gt;Internet : dates historiques</h2>
        <ul className="date">
          {DATES.map((d, i) => (
            <Fragment key={i}>
              <li>Création du HTML : {d.creation}</li>
              <li>Développement des outils en sémentique : {d.developpement}</li>
              <li>Abondon HTML en faveur du xhtml : {d.abandon}</li>
              <li>Compatibilité des langages : {d.compatibilite}</li>
            </Fragment>
          ))}
        </ul>
      </section>
      <section className="languages">
        <h2>
          &lt;/&gt;HTML<sup>5</sup> : 2014
        </h2>
        <dl>
          <dt>Balises sémentiques adaptées</dt>
          <dd>&lt;/&gt;</dd>
        </dl>
        <dl>
          <dt>Composants spécifiques</dt>
          <dd>
            <CloudIcon aria-hidden="true" />
          </dd>
        </dl>
        <dl>
          <dt>Compatibilité avec les langages</dt>
          <dd>
            <SpinnerIcon className="spinner" aria-hidden="true" />
          </dd>
        </dl>
        <dl>
          <dt>Centré sur l&apos;utilisateur</dt>
          <dd>
            <UserIcon aria-hidden="true" />
          </dd>
        </dl>
        <dl>
          <dt>Développé en permanance</dt>
          <dd>
            <FlaskIcon aria-hidden="true" />
          </dd>
        </dl>
        <p className="helper">
          Après l&apos;abandon du XHTML 2.0 le World Wide Web travail sur la
          normalisation du HTML<sup>5</sup> qui a pur but de décrire la
          sémentique des documents ou les applications en ligne et enrichir
          les interfaces utilisateurs avec des contrôles spécifiques en
          assurant la compatibilité avec les différent langages du web
        </p>
      </section>
    </>
  );
}
