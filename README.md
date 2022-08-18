# regex-match-unique-action
Github action that uses provided regex to match a string and return unique values from the matched result

## Example
Let's consider the following text:
```
CR-123 - this is a commit change with a JIRA ticket
CD-542 - another change with a JIRA ticket, and here comes another associated CR-143 JIRA ticket
<p>CS-099</p>
```

And let's assume that we'll run the action as follows:

```
- name: Extract JIRA tickets
  id: extracted_tickets
  uses: emilcieslar/regex-match-unique-action@1.0.1
  with:
    text: ${{ github.event.inputs.text }}
    regex: '([A-Za-z0-9]+-\d+)'
    flags: 'g'
```

This action will ouptput the resulting match as an array. In our example, it will be:

```
['CR-123', 'CD-542', 'CR-143', 'CS-099']
```

And you can use it in your actions as follows:

```
- name: Using extracted array
  run: echo "${{ toJSON(steps.extracted_tickets.outputs.results) }}"
```

or as a comma-separated string:

```
- name: Using extracted string
  run: echo "${{ steps.extracted_tickets.outputs.results_string }}"
