type ClueItem = {
  iconISfile: string;
  icon_disabledISfile: string;
  messageISsmallplaintextbox: string;
  title: string;
};

type FormField = {
  field: string;
  type: string;
};

type Game = {
  name: string;
  welcome_title: string;
  welcome_messageISsmallplaintextbox: string;
  terms_checkbox_wordingISsmallplaintextbox: string;

  how_to_play_title: string;
  how_to_play_messageISsmallplaintextbox: string;

  final_congratulations_title: string;
  final_congratulations_messageISsmallplaintextbox: string;

  overall_button_color: string;
  overall_button_text_color: string;
  overall_text_color: string;

  overall_backgroundISfile: string;

  clues: { [key: string]: ClueItem };
  fields: Array<FormField>;
};
