
		<!-- Content Start -->
		














<h2>
	Erweiterte Suche nach Bekanntmachungen
</h2>



<form action="?" id="searchAjaxForm">
	<input type="hidden" id="page" name="page" value="1"> <input type="hidden" id="sortField" name="sortField" value="PROJECT_PUBLICATION_DATE_LNG"> <input type="hidden" id="order" name="order" value="0"> <input type="hidden" id="token" value="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiIwIiwibmJmIjoxNzQ5OTk3Nzg2LCJpc3MiOiJ3d3cuZHR2cC5kZSIsImV4cCI6MTc0OTk5ODM4Nn0.AAAAAAAAAACeZkloyTZgRLwTmNpleEytA80dfvVR7i4AAAAAAAAAAB0egeCbhQ8KFgi_F539zGVg_P625eO66g"> <input type="hidden" id="cpvCodes" name="cpvCodes" value="[]">

	<div class="searchContainer">
		<div class="criteriaBox">
			<span class="searchTypesHeadlines">Suchbegriff</span>
			<div class="filterBoxInputExtended" style="margin-bottom: 15px;">
				<input id="searchText" class="clear-textfield" type="text" name="searchText" value="" maxlength="255">
				<div class="clearSearchString clearSearchStringButton" title="Textfeld leeren" style="display: none;"></div>
			</div>
			<div class="control-group" style="padding-bottom: 10px;">
				<span style="margin-bottom: 5px;" class="searchTypesHeadlines">Region</span>
				<div style="float: left;" class="table-cell box-width-100">
					<input name="distanceRadio" id="distanceRadioNational" value="national" checked="checked" type="radio"> <label for="distanceRadioNational" class="search-label-height"> Alle
					</label>
				</div>
				<div style="float: right;" class="table-cell circumference-column text-right">
					<input name="distanceRadio" id="distanceRadioSurrounding" value="surrounding" type="radio"> <label for="distanceRadioSurrounding" class="search-label-height">
						Umkreissuche
					</label>
				</div>
			</div>

			<div id="elementsToOperateOn1" class="table-box">
				<div style="float: left;" class="table-cell box-width-100">
					<label for="postalCode" class="search-label-height">Postleitzahl</label>
				</div>
				<div style="float: right;" class="table-cell circumference-column text-right">
					<div class="filterBoxInputExtendedSmall">
						<input id="postalCode" type="text" name="postalCode" maxlength="5" class="clear-textfield" disabled="disabled" style="text-align: right;" value="">
						<div class="clearSearchString clearSearchStringButton" title="Textfeld leeren" style="display: none;"></div>
					</div>
				</div>
			</div>

			<div id="elementsToOperateOn2" style="clear: both; padding-top: 10px;" class="table-box">
				<div style="float: left; padding-top: 2px;" class="table-cell box-width-100">
					<label for="distance" class="search-label-height">Umkreis</label>
				</div>
				<div style="float: right;" class="table-cell circumference-column text-right">
					<select id="distance" class="searchBoxInputDropDown" name="distance" disabled="disabled">
						<option value="25">25 km</option>
						<option value="50">50 km</option>
						<option selected="selected" value="100">100 km</option>
						<option value="200">200 km</option>
					</select>
				</div>
			</div>
		</div>

		<div class="criteriaBox" style="margin-left: 10px;">
			<div class="searchTypes">
				<span class="searchTypesHeadlines" style="min-width: 180px;">Veröffentlichungstyp</span>
				<ul class="checkBoxList">
					<li>
						<input value="" type="checkbox" id="alle2" class="checkAll">
						<label for="alle2"> Alle</label>
					</li>
					<li>
						<input value="ExAnte" type="checkbox" id="ExAnte" name="publicationTypes[]">
						<label for="ExAnte"> Beabsichtigte Ausschreibung</label>
					</li>
					<li>
						<input value="Tender" type="checkbox" id="Tender" name="publicationTypes[]" checked="checked">
						<label for="Tender"> Ausschreibung</label>
					</li>
					<li>
						<input value="ExPost" type="checkbox" id="ExPost" name="publicationTypes[]">
						<label for="ExPost"> Vergebener Auftrag</label>
					</li>
				</ul>
			</div>
		</div>

		<div class="criteriaBox">
			<div class="searchTypes">
				<span class="searchTypesHeadlines">Vergabeordnung</span>
				<ul class="checkBoxList">
					<li><input value="UNDEFINED" type="checkbox" id="alle" class="checkAll"> <label for="alle">
							Alle
					</label></li>
					<li><input value="VOL" type="checkbox" id="VOL" name="contractingRules[]"> <label for="VOL"> <abbr title="Liefer und Dienstleistungen">VgV / VOL/A / UVgO</abbr>
					</label></li>
					<li><input value="VOB" type="checkbox" id="VOB" name="contractingRules[]">
						<label for="VOB"> <abbr title="Bauleistungen">VOB/A</abbr>
					</label></li>
					<li><input value="VSVGV" type="checkbox" id="VSVGV" name="contractingRules[]"> <label for="VSVGV"> <abbr title="Verteidigung und Sicherheit">VSVgV</abbr>
					</label></li>
					<li><input value="SEKTVO" type="checkbox" id="SEKTVO" name="contractingRules[]"> <label for="SEKTVO"> <abbr title="Sektorenverordnung">SektVO</abbr>
					</label></li>
					<li><input value="OTHER" type="checkbox" id="Sonstige" name="contractingRules[]"> <label for="Sonstige"> <abbr title="Sonstige">Sonstige</abbr>
					</label></li>
				</ul>
			</div>
		</div>

		<div class="criteriaBox searchTypesCPVBoxExtended" data-extended-cpvbox="">
			<div class="searchTypes searchTypesCPVBox">
				<span class="searchTypesHeadlines"><input id="cpvcodes" name="cpvcodes" type="hidden"> Auftragsgegenstand <a href="/Center/common/cpvcodewizardModal.do?method=showModal" id="openCPVWizard" title="Auswahl bearbeiten">Auswahl bearbeiten </a> </span>
				<div id="cpvCodesList">
		<div class="noCPVSelected">
							Alle Auftragsgegenstände
						</div>
</div>
			</div>
		</div>

		<div class="searchButtonsBoxExtended" data-extended-button="">
			<input id="searchStart" name="searchStart" type="submit" class="btn" value="Suchen">
		</div>
	</div>
</form>

<div id="resultContent"><div class="loading-anim-overlay" data-loadingboxname="cpv-code" style="position: relative; margin: 15px 0px; height: 40px; display: none;"><div class="loading-anim-box" style="left: 0px;"><span class="spinnerContainer spinnerContainerModalerDialog"><span class="spinner"></span></span><span class="work-in-progress-text" style="float:left;">Bitte warten</span></div></div>
	<div id="listTemplate" style="">
<h3 style="margin-top:20px;">Ihre Suche lieferte 13737 Treffer</h3>
<table>

		<tfoot>
			<tr>
				<td colspan="7">
					<div class="browsePages">
						<a id="firstPage" class="browseFirstGhost" title="erste Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="previousPage" class="browseBackwardGhost" title="vorherige Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="nextPage" class="browseForward waitClick" title="nächste Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="lastPage" class="browseLast waitClick" title="letzte Seite" href="javascript:void(0);">&nbsp;</a>
						<div class="browsePagesText">Seite: 1 von 687 - Gesamteinträge: 13737
						</div>
					</div>
				</td>
			</tr>
		</tfoot>

		<thead>
			<tr>
				<th><a id="publicationDate" ui-sortcolumn="PROJECT_PUBLICATION_DATE_LNG" class="sortable" href="javascript:void(0);">Veröffentlicht<span class="sortTableDESC"></span></a></th>
				<th><a id="relevantDate" ui-sortcolumn="PERIOD_LNG" class="sortable" href="javascript:void(0);">Angebots- / Teilnahmefrist</a></th>
				<th><a id="title" ui-sortcolumn="TITLE" class="sortable" href="javascript:void(0);">Kurzbezeichnung</a></th>
				<th><a id="type" ui-sortcolumn="PROJECT_PUBLICATION_TYPE" class="sortable" href="javascript:void(0);">Typ</a></th>
				<th><a id="publisher" ui-sortcolumn="PROJECT_ORGANISATION_NAME" class="sortable" href="javascript:void(0);">Vergabeplattform / Veröffentlicher</a></th>
				<th style="text-align:center;">Aktion</th>
			</tr>
		</thead>
		<tbody>

				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 15:20 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="15.07.2025 um 11:00 Uhr">15.07.2025</abbr>
						</td>

						<td class="word-break">
							Rahmenvertrag Referentenleistungen
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Kassenärztliche Vereinigung Baden-Württemberg
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275900', '2275900');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 14:36 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2028 um 12:00 Uhr">05.06.2028</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Nilotinib (ausgenommen als DISP in Apfelmus) f. d. Z. 01.8.25 - 31.7.27 (zzgl. Verlängerungsoption 1x12 Mon.)
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275898', '2275898');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 14:34 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="14.07.2025 um 13:00 Uhr">14.07.2025</abbr>
						</td>

						<td class="word-break">
							Elektroarbeiten
						</td>

						<td style="width: 120px;">
							VOB/A Ausschreibung
						</td>

						<td style="min-width:200px;">
							Studierendenwerk Karlsruhe AöR
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275897', '2275897');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 14:18 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2028 um 12:00 Uhr">05.06.2028</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Fluorouracil, ATC D11AF05 für die Zeit 01.08.2025 - 31.07.2027 (zzgl. Verlängerungsoption 1x12 Monate)
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275896', '2275896');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:52 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="18.07.2025 um 11:30 Uhr">18.07.2025</abbr>
						</td>

						<td class="word-break">
							Neubau "Mehrgenerationenhaus Wiggerskamp" inkl. Kita in Emlichheim - Objektplanung Freianlagen
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Gemeinde Emlichheim
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275894', '2275894');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:44 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="18.07.2025 um 11:00 Uhr">18.07.2025</abbr>
						</td>

						<td class="word-break">
							Neubau "Mehrgenerationenhaus Wiggerskamp" inkl. Kita in Emlichheim - Tragwerksplanung
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Gemeinde Emlichheim
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275892', '2275892');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:44 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="14.07.2025 um 11:00 Uhr">14.07.2025</abbr>
						</td>

						<td class="word-break">
							Fahrradleasing
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Elbphilharmonie und Laeiszhalle Betriebsgesellschaft mbH
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275893', '2275893');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:36 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="18.07.2025 um 10:30 Uhr">18.07.2025</abbr>
						</td>

						<td class="word-break">
							Neubau "Mehrgenerationenhaus Wiggerskamp" inkl. Kita in Emlichheim - Fachplanung Technische Ausrüstung ELT
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Gemeinde Emlichheim
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275891', '2275891');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:30 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="18.07.2025 um 10:00 Uhr">18.07.2025</abbr>
						</td>

						<td class="word-break">
							Neubau "Mehrgenerationenhaus Wiggerskamp" inkl. Kita in Emlichheim - Fachplanung Technische Ausrüstung HLS
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Gemeinde Emlichheim
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275890', '2275890');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:18 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2027 um 12:00 Uhr">05.06.2027</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Felbamat, ATC N03AX10 für die Zeit 01.08.2025 - 31.07.2027
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275887', '2275887');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:18 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="15.07.2025 um 11:00 Uhr">15.07.2025</abbr>
						</td>

						<td class="word-break">
							SAP S/4HANA-Support Core &amp; IS_U
						</td>

						<td style="width: 120px;">
							SektVO <abbr title="Teilnahmewettbewerb">TNW</abbr>
						</td>

						<td style="min-width:200px;">
							Oldenburgisch-Ostfriesischer Wasserverband
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275888', '2275888');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:14 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="15.07.2025 um 12:00 Uhr">15.07.2025</abbr>
						</td>

						<td class="word-break">
							Entwicklung, Hosting und Betrieb der "Digitalen Kundenschnittstelle" der SBK
						</td>

						<td style="width: 120px;">
							VgV <abbr title="Teilnahmewettbewerb">TNW</abbr>
						</td>

						<td style="min-width:200px;">
							SBK Siemens-Betriebskrankenkasse
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275886', '2275886');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:08 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2027 um 12:00 Uhr">05.06.2027</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Eisen(III)-Derisomaltose, ATC B03AC08 für die Zeit 01.08.2025 - 31.07.2027
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275885', '2275885');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:06 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="15.07.2025 um 10:00 Uhr">15.07.2025</abbr>
						</td>

						<td class="word-break">
							Anmietung eines Messfahrzeugs mit Geschwindigkeitsmesstechnik
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Hanse- und Universitätsstadt Rostock, Die Oberbürgermeisterin, Rechts- und Vergabeamt, SG Zentrale Vergabe und Beschaffung
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275884', '2275884');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 13:00 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="17.07.2025 um 11:00 Uhr">17.07.2025</abbr>
						</td>

						<td class="word-break">
							Samtgemeinde Meinersen - Sanierung Waldbad  - Objektplanung Freianlagen
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Samtgemeinde Meinersen
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275882', '2275882');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 12:52 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2027 um 12:00 Uhr">05.06.2027</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Certolizumab pegol, ATC L04AB05 für die Zeit 01.08.2025 - 31.07.2027
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275881', '2275881');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 12:50 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="01.07.2025 um 10:00 Uhr">01.07.2025</abbr>
						</td>

						<td class="word-break">
							Interferenzfilter für die Thomsonstreuung (QTB)
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Max-Planck-Institut für Plasmaphysik TI Greifswald
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275880', '2275880');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 12:46 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="25.07.2025 um 11:00 Uhr">25.07.2025</abbr>
						</td>

						<td class="word-break">
							Energetische Sanierung des Hafenhauses Zoll in Bremen - Technische Ausrüstung (ALG 2)
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							Stadtgemeinde Bremen vertr. d. Sondervermögen Überseestadt, Betrieb gewerblicher Art vertr. d. WFB Wirtschaftsförderung Bremen GmbH
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275879', '2275879');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 12:42 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="05.06.2027 um 12:00 Uhr">05.06.2027</abbr>
						</td>

						<td class="word-break">
							Abschluss einer nicht-exklusiven Rabattvereinbarung nach § 130a Abs. 8 SGB V zum Wirkstoff Melatonin (ausschließlich 1mg und 5mg), ATC N05CH01 für die Zeit 01.08.2025 - 31.07.2027
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							DAK-Gesundheit
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275878', '2275878');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="15.06.2025 um 12:40 Uhr">15.06.2025</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="16.07.2025 um 10:00 Uhr">16.07.2025</abbr>
						</td>

						<td class="word-break">
							Gesundheitspartnerportal
						</td>

						<td style="width: 120px;">
							VgV Ausschreibung
						</td>

						<td style="min-width:200px;">
							AOK Baden - Württemberg
						</td>

						<td style="width: 80px;text-align:center;">

								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('https://www.dtvp.de/Center/public/company/projectForwarding.do?pid=2275877', '2275877');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>




						</td>
					</tr>


		</tbody>
	</table>
	<h3 class="searchResultHeadline searchResultDistance">Keine passende Bekanntmachung gefunden?</h3>
	<div class="hintDist boxNoBackgroundNoBorder">
		<p>
			Finden Sie
			<a href="/Center/company/announcements/categoryOverview.do?method=showCategoryOverview">hier</a>
			für Ihr Unternehmen relevante Bekanntmachungen auf Basis des Auftragsgegenstandes.
		</p>
	</div>
</div>
</div>
<script id="emptyCpvResultBoxCPVTemplate" type="text/x-handlebars-template">
		<div class="noCPVSelected">
							Alle Auftragsgegenstände
						</div>
</script>
<script id="cpvResultBoxCPVTemplate" type="text/x-handlebars-template">
<div class="resultBoxCPV">
<ul>
	{{#each cpvcodes}}
		<li data-code="{{code}}">
			<span class="nameCPV">{{name}}</span>
			<span class="deleteCPV">
				<a class="noTextDecorationLink" ui-action="deleteCPVCode" ui-data="{{code}}">
					<span class="userActionDeleteIcon" title="{{name}}">&nbsp;</span>
				</a>
			</span>
		</li>
	{{/each}}
</ul>
</div>
</script>

<script id="entry-template" type="text/x-handlebars-template">
<h3 style="margin-top:20px;">Ihre Suche lieferte {{countOfAllDataSets}} Treffer</h3>
{{#each messages}}
{{#compare severity "INFO" operator="==="}}
	<p class="info">{{{message}}}</p>
{{/compare}}
{{#compare severity "ERROR" operator="==="}}
<ul id="errorMessages">"/>
	<li class="error">{{{message}}}</li>
</ul>

{{/compare}}
{{/each}}
<table>

		<tfoot>
			<tr>
				<td colspan="7">
					<div class="browsePages">
						<a id="firstPage" class="browseFirst" title="erste Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="previousPage" class="browseBackward" title="vorherige Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="nextPage" class="browseForward waitClick" title="nächste Seite" href="javascript:void(0);">&nbsp;</a>
						<a id="lastPage" class="browseLast waitClick" title="letzte Seite" href="javascript:void(0);">&nbsp;</a>
						<div class="browsePagesText">Seite: {{searchParameter.page}} von {{allPages}} - Gesamteinträge: {{countOfAllDataSets}}
						</div>
					</div>
				</td>
			</tr>
		</tfoot>

		<thead>
			<tr>
				<th><a id="publicationDate" ui-sortcolumn="PROJECT_PUBLICATION_DATE_LNG" class="sortable" href="javascript:void(0);">Veröffentlicht</a></th>
				<th><a id="relevantDate" ui-sortcolumn="PERIOD_LNG" class="sortable" href="javascript:void(0);">Angebots- / Teilnahmefrist</a></th>
				<th><a id="title" ui-sortcolumn="TITLE" class="sortable" href="javascript:void(0);">Kurzbezeichnung</a></th>
				<th><a id="type" ui-sortcolumn="PROJECT_PUBLICATION_TYPE" class="sortable" href="javascript:void(0);">Typ</a></th>
				<th><a id="publisher" ui-sortcolumn="PROJECT_ORGANISATION_NAME" class="sortable" href="javascript:void(0);">Vergabeplattform / Veröffentlicher</a></th>
				<th style="text-align:center;">Aktion</th>
			</tr>
		</thead>
		<tbody>

		{{#if projects}}
			{{#each projects}}
				<tr>

						<td style="width: 120px; text-align: center;">
						<abbr title="{{{publishingDateLong }}}">{{{publishingDate}}}</abbr>
						</td>
						<td style="width: 140px; text-align: center;">
							<abbr title="{{{relevantDateLong}}}">{{{relevantDate}}}</abbr>
						</td>

						<td class="word-break">
							{{title}}
						</td>

						<td style="width: 120px;">
							{{{contractingRule}}} {{{publicationType}}}
						</td>

						<td style="min-width:200px;">
							{{organisationName}}
						</td>

						<td style="width: 80px;text-align:center;">

					{{#if links.ENTER_PROJECTROOM}}
								 <a class="noTextDecorationLink" href="javascript:openProjectPopup('{{links.ENTER_PROJECTROOM}}', '{{projectId}}');">
									<img src="/Center/images/icons/action_to_projectroom.gif" height="16px" width="16px" title="Informationen zu diesem Projekt" alt="Link zu den Projektdetails öffnet ein neues Fenster">
								</a>
							{{/if}}

							{{#if links.COMPANY_LOGIN}}
								<a href="javascript:void(0);" data-login-link="{{links.COMPANY_LOGIN}}">
								<img width="16px" height="16px" alt="Link zu den Projektdetails öffnet ein neues Fenster" title="Informationen zu diesem Projekt" src="/Center/images/icons/action_to_projectroom.gif">
								</a>
							{{/if}}

							{{#ifCond earmarked "===" true}}
								<a style="margin-left:5px;cursor:default;text-decoration:none!important;" href="javascript:void(0);" data-earmarked-id="{{projectId}}" data-earmarked-status="{{earmarked}}" data-earmarked-url="/Center/api/v2/project/{{projectId}}/earmark">
									<img data-earmarked-image-false="" src="/Center/images/icons/action_earmark_inactive.gif" width="16px" height="16px" alt="Vormerkung löschen" title="Vormerkung löschen">
									<img data-earmarked-image-true="" style="display:none;" src="/Center/images/icons/action_earmark_active.gif" width="16px" height="16px" alt="Vormerkung hinzufügen" title="Vormerkung hinzufügen">
								</a>
							{{else}}
								{{#ifCond earmarked "===" false}}
									<a class="noTextDecorationLink" style="margin-left:5px;" href="javascript:void(0);" data-earmarked-id="{{projectId}}" data-earmarked-status="{{earmarked}}" data-earmarked-url="/Center/api/v2/project/{{projectId}}/earmark">
										<img data-earmarked-image-true=""  src="/Center/images/icons/action_earmark_active.gif" width="16px" height="16px" alt="Vormerkung hinzufügen" title="Vormerkung hinzufügen">
										<img data-earmarked-image-false="" style="display:none;" src="/Center/images/icons/action_earmark_inactive.gif" width="16px" height="16px" alt="Vormerkung löschen" title="Vormerkung löschen">
									</a>
									{{else}}

								{{/ifCond}}
							{{/ifCond}}

						</td>
					</tr>
			{{/each}}
 	 {{else}}
				<tr>
					<td  colspan="6">
						Es wurden keine passenden Bekanntmachungen gefunden.
					</td>
				</tr>
	{{/if}}


		</tbody>
	</table>
	<h3 class="searchResultHeadline searchResultDistance">Keine passende Bekanntmachung gefunden?</h3>
	<div class="hintDist boxNoBackgroundNoBorder">
		<p>
			Finden Sie
			<a href="/Center/company/announcements/categoryOverview.do?method=showCategoryOverview">hier</a>
			für Ihr Unternehmen relevante Bekanntmachungen auf Basis des Auftragsgegenstandes.
		</p>
	</div>
</script>

<script type="text/javascript">
	// Set CPV-Code extended
	$(window)
			.on(
					"resize",
					function() {
						function resizeCPVCodeExtended() {

							var $objBox = $('[data-extended-cpvbox]');
							var $objButton = $('[data-extended-button]');
							var w = $(window).width();

							if (w >= 1240) {
								$objButton.addClass(
										"searchButtonsBoxExtended1280")
										.removeClass('extendedClearSpace');
								$objBox
										.removeClass("searchButtonsBoxExtendedClear extendedClearSpace");
							}
							if (w > 1360) {
								$objButton
										.removeClass("searchButtonsBoxExtended1280 extendedClearSpace");
								$objBox
										.removeClass("searchButtonsBoxExtendedClear extendedClearSpace");
							}
							if (w < 1240) {
								$objButton.removeClass(
										"searchButtonsBoxExtended1280")
										.addClass('extendedClearSpace');
								$objBox
										.addClass("searchButtonsBoxExtendedClear extendedClearSpace");
							}
						}
						resizeCPVCodeExtended();
					}).trigger('resize');
	$(function() {
		function getUrlParameter(sParam) {
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) {
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) {
					//return sParameterName[1];
					return sParameterName[1].replace(/\+/g, '%20');
				}
			}
		}
		var searchString = getUrlParameter('searchString');
		if (searchString != undefined) {
			$("[name='searchText']").val(decodeURIComponent(searchString));
		}
		var form = $("#searchAjaxForm");

		var selfUrl = "/Center/common/project/search.do?method=showExtendedSearch&fromExternal=true"
		var localizedLoadingText = "Bitte warten";
		var search = new TenderSearch("/Center/api/v2/project/search", form,true, selfUrl,localizedLoadingText);
		search.resources.cpvWizzard.headerText = "Assistent CPV-Code-Auswahl";
		search.resources.cpvWizzard.buttonCloseText = "Assistent schließen";
		search.resources.loadingText = "Bitte warten";

		// Initialisierung Deutschlandweit vs. Umkreissuche
		function distanceRadioChanged(event) {
			if ($("[name='distanceRadio']:checked").val() == 'national') {
				$("#postalCode").attr('disabled', true).next(
						'.clearSearchStringButton').hide(); // Hide Clear Textfiedl Button
				$("#postalCode").attr('value', '');
				$("#distance").attr('disabled', true);
			} else {
				$("#postalCode").prop('disabled', false);
				$("#distance").prop('disabled', false);
			}

		}
		$("#distanceRadioSurrounding").on('change', distanceRadioChanged);
		$("#distanceRadioNational").on('change', distanceRadioChanged);
		distanceRadioChanged();
	});
</script>


		<!-- Content End -->
	
