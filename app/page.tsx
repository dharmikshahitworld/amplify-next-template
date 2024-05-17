'use client';

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '@/amplify_outputs.json';
import Heading from './components/ui/heading';
import Button from './components/ui/button';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt('Todo content'),
    });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Heading level={3}>My Todos</Heading>
          <Button onClick={createTodo}>+ New</Button>
          <ul className="flex flex-col gap-1 p-0 my-2 border border-black bg-black rounded-lg overflow-auto">
            {todos.map((todo) => (
              <li
                className="bg-white p-2 hover:bg-indigo-100 cursor-pointer"
                onClick={() => deleteTodo(todo.id)}
                key={todo.id}
              >
                {todo.content}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            🥳 App successfully hosted. Try creating a new todo.
            <br />
            <a
              className="font-bold text-blue-500"
              href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
            >
              Review next steps of this tutorial.
            </a>
          </div>
          <Button variant="danger" onClick={signOut}>
            Sign out
          </Button>
        </main>
      )}
    </Authenticator>
  );
}
